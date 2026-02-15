import { NextResponse } from "next/server";
import { fetchQuestions } from "@/lib/data";

type RouteContext = {
  params: Promise<{ id: string }>;
};

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export async function GET(_req: Request, context: RouteContext) {
  const { id: topicId }= await context.params;

  if (!isUuid(topicId)) {
    return NextResponse.json({ error: "Invalid topic id" }, { status: 404 });
  }

  const questions = await fetchQuestions(topicId);

  return NextResponse.json(
    questions.map((q) => ({
      id: q.id,
      title: q.title,
      topic_id: q.topic_id,
      votes: q.votes,
    })),
  );
}
