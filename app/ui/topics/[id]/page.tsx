type TopicPageProps = {
  params: { id: string }; // App Router injects route params.
  searchParams: Record<string, string | string[] | undefined>;
};

async function loadTopic(id: string) {
  // Placeholder for server-side data fetching (DB/API); keeps I/O at the edge.
  // Replace this with real fetch once backend is ready.
  await new Promise((r) => setTimeout(r, 400)); // simulate latency
  return {
    id,
    name: `Topic ${id}`,
    questions: [
      { id: "q1", title: "What is Next.js App Router?", votes: 4 },
      { id: "q2", title: "How do layouts persist across routes?", votes: 2 },
    ],
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const topic = await loadTopic(params.id); // Server component can await directly.

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