import Link from "next/link";
import VoteButton from "./VoteButton";

type QuestionProps = {
  id: string;
  topicId: string;
  text: string;
  votes: number;
};

export function Question({ id, topicId, text, votes }: QuestionProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <div className="mr-2 rounded-xl bg-secondary px-2 text-sm text-white">
        {votes}
      </div>

      <Link
        href={`/ui/questions/${id}`}
        className="text w-full text-left font-semibold hover:underline"
      >
        {text}
      </Link>

      <VoteButton topicId={topicId} questionId={id} />
    </div>
  );
}
