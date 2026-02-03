import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { upvoteQuestion } from "@/lib/actions";

export default function VoteButton({
  topicId,
  questionId,
}: {
  topicId: string;
  questionId: string;
}) {
  const action = upvoteQuestion.bind(null, topicId, questionId);

  return (
    <form action={action}>
      <button
        type="submit"
        className="h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal active:bg-primary active:text-white active:outline-hidden active:ring-2 active:ring-primary"
      >
        <HandThumbUpIcon />
      </button>
    </form>
  );
}
