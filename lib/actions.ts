"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { incrementVotes, insertQuestion, insertTopic } from "./data";

function requireNonEmptyString(value: FormDataEntryValue | null, field: string) {
  if (typeof value !== "string") {
    throw new Error(`${field} is required.`);
  }
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error(`${field} cannot be empty.`);
  }
  return trimmed;
}

/**
 * Creates a new topic
 * Called from: /ui/topics/new
 */
export async function createTopic(formData: FormData) {
  const title = requireNonEmptyString(formData.get("title"), "Title");

  await insertTopic({ title });

  // Update sidebar (layout) + /ui topic list.
  revalidatePath("/ui", "layout");
  revalidatePath("/ui");

  redirect("/ui");
}

/**
 * Creates a question for a topic
 * Called from: /ui/topics/:id
 */
export async function createQuestion(topicId: string, formData: FormData) {
  const title = requireNonEmptyString(formData.get("title"), "Question");

  await insertQuestion({ title, topic_id: topicId, votes: 0 });

  const topicPath = `/ui/topics/${topicId}`;
  revalidatePath(topicPath);

  redirect(topicPath);
}

/**
 * Increments votes for a question
 * Called from: /ui/topics/:id
 */
export async function upvoteQuestion(topicId: string, questionId: string) {
  await incrementVotes(questionId);

  const topicPath = `/ui/topics/${topicId}`;
  revalidatePath(topicPath);

  redirect(topicPath);
}
