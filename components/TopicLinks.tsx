import TopicLink from "./TopicLink";
import { fetchTopics } from "@/lib/data";

export default async function TopicLinks() {
  const topics = await fetchTopics();

  return (
    <>
      {topics.map((topic) => (
        <TopicLink key={topic.id} id={topic.id} title={topic.title} />
      ))}
    </>
  );
}
