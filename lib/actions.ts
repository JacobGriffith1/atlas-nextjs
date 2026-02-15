"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { insertAnswer, setAcceptedAnswer, incrementVotes, insertQuestion, insertTopic } from "./data";

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

export async function createTopic(formData: FormData) {
  const title = requireNonEmptyString(formData.get("title"), "Title");

  await insertTopic({ title });

  revalidatePath("/ui", "layout");
  revalidatePath("/ui");

  redirect("/ui");
}

export async function createQuestion(topicId: string, formData: FormData) {
  const title = requireNonEmptyString(formData.get("title"), "Question");

  await insertQuestion({ title, topic_id: topicId, votes: 0 });

  const topicPath = `/ui/topics/${topicId}`;
  revalidatePath(topicPath);

  redirect(topicPath);
}

export async function upvoteQuestion(topicId: string, questionId: string) {
  await incrementVotes(questionId);

  const topicPath = `/ui/topics/${topicId}`;
  revalidatePath(topicPath);

  redirect(topicPath);
}

export async function createAnswer(questionId: string, formData: FormData) {
  const answer = requireNonEmptyString(formData.get("answer"), "Answer");

  await insertAnswer({ answer, question_id: questionId });

  const path = `/ui/questions/${questionId}`;
  revalidatePath(path);

  redirect(path);
}

export async function acceptAnswer(questionId: string, answerId: string) {
  await setAcceptedAnswer({ question_id: questionId, answer_id: answerId });

  const path = `/ui/questions/${questionId}`;
  revalidatePath(path);

  redirect(path);
}
