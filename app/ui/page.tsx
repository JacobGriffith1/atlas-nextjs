import { fetchTopics } from "@/lib/data";
import { Topic } from "@/components/Topic";

export default async function Page() {
  const topics = await fetchTopics();

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Topics</h1>

      <section className="rounded-md overflow-hidden">
        {topics.map((t) => (
          <Topic key={t.id} id={t.id} text={t.title} />
        ))}
      </section>
    </main>
  );
}
