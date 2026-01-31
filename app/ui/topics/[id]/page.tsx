import { AskQuestion } from "@/components/AskQuestion";
import { Question } from "@/components/Question";
import { fetchQuestions, fetchTopic } from "@/lib/data";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id: topicId } = await params;

  const topic = await fetchTopic(topicId);
  const questions = await fetchQuestions(topicId);

  if (!topic) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-semibold">Topic not found</h1>
      </main>
    );
  }

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold">{topic.title}</h1>
        <p className="text-sm text-gray-600">Questions ordered by votes.</p>
      </header>

      <AskQuestion topic={topicId} />

      <section className="rounded-md overflow-hidden">
        {questions.map((q) => (
          <Question key={q.id} id={q.id} text={q.title} votes={q.votes} />
        ))}
      </section>
    </main>
  );
}
