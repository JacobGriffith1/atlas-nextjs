import { NextResponse } from "next/server";
import { fetchAnswers } from "@/lib/data";

type RouteContext = {
  params: Promise<{ id: string }>;
};

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export async function GET(_req: Request, context: RouteContext) {
  const { id: questionId } = await context.params;

  if (!isUuid(questionId)) {
    return NextResponse.json({ error: "Invalid question id" }, { status: 400 });
  }

  const answers = await fetchAnswers(questionId);

  return NextResponse.json(
    answers.map((a) => ({
      id: a.id,
      answer: a.answer,
      question_id: a.question_id,
    })),
  );
}
