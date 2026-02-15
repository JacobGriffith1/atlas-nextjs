import { NextResponse } from "next/server";
import { fetchTopics } from "@/lib/data";

export async function GET() {
  const topics = await fetchTopics();

  return NextResponse.json(
    topics.map((t) => ({ id: t.id, title: t.title })),
  );
}
