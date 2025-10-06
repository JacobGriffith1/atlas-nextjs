// app/ui/topics/[id]/page.tsx

type Props = {
  params: Promise<{ id: string }>;
};

async function loadTopic(id: string) {
  await new Promise((r) => setTimeout(r, 400));
  return {
    id,
    name: `Topic ${id}`,
    questions: [
      { id: "q1", title: "What is Next.js App Router?", votes: 4 },
      { id: "q2", title: "How do layouts persist across routes?", votes: 2 },
    ],
  };
}

export default async function TopicPage({ params }: Props) {
  const { id } = await params;

  const topic = await loadTopic(id);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">{topic.name}</h1>
        <p className="text-sm opacity-70">All questions for this topic.</p>
      </header>

      <ul className="space-y-2">
        {topic.questions.map((q) => (
          <li key={q.id} className="rounded-md border p-4">
            <div className="font-medium">{q.title}</div>
            <div className="text-xs opacity-70">Votes: {q.votes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
