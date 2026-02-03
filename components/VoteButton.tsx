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
        className="h-8 w-8 min-w-[2rem] rounded-full ring-1 ring-gray-200
                  transition
                  hover:bg-primary-foreground hover:text-atlas-teal hover:ring-atlas-teal
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-teal
                  active:bg-primary active:text-white active:ring-primary
                  cursor-pointer"
      >
        <HandThumbUpIcon className="transition-transform hover:scale-110" />
      </button>
    </form>
  );
}
