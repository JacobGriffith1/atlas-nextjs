import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/outline";
import { fetchAnswers, fetchQuestion } from "@/lib/data";
import { createAnswer, acceptAnswer } from "@/lib/actions";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: PageProps) {
  const { id: questionId } = await props.params;

  const question = await fetchQuestion(questionId);
  if (!question) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-semibold">Question not found</h1>
      </main>
    );
  }

  const answers = await fetchAnswers(questionId);
  const acceptedAnswerId = question.answer_id;

  const orderedAnswers = acceptedAnswerId
    ? [
        ...answers.filter((a) => a.id === acceptedAnswerId),
        ...answers.filter((a) => a.id !== acceptedAnswerId),
      ]
    : answers;

const createAnswerAction = createAnswer.bind(null, questionId);

  return (
    <main className="p-6 space-y-6">
      {/* Question Heading */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold">Question</h1>
        <p className="text-lg">{question.title}</p>
      </header>

      {/* Answer Form */}
      <form
        action={createAnswerAction}
        className="space-y-3 rounded-md bg-gray-50 p-4 md:p-6"
      >
        <label htmlFor="answer" className="block text-sm font-medium">
          Submit an answer
        </label>

        <textarea
          id="answer"
          name="answer"
          rows={3}
          placeholder="Write your answer..."
          className="block w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500"
          required
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Answers List */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Answers</h2>

        {orderedAnswers.length === 0 ? (
          <p className="text-sm text-gray-600">No answers yet.</p>
        ) : (
          <ul className="space-y-2">
            {orderedAnswers.map((a) => {
              const isAccepted = a.id === acceptedAnswerId;

              return (
                <li
                  key={a.id}
                  className="flex items-start justify-between gap-3 rounded-md border border-gray-200 bg-white p-4"
                >
                  <div className="flex items-start gap-2">
                    {isAccepted ? (
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        <span className="text-xs font-medium text-green-700">
                          Accepted
                        </span>
                      </div>
                    ) : null}

                    <p className="text-sm">{a.answer}</p>
                  </div>

                  <form action={acceptAnswer.bind(null, questionId, a.id)}>
                    <button
                      type="submit"
                      disabled={isAccepted}
                      className="h-9 w-9 rounded-full transition cursor-pointer
                                 hover:bg-primary-foreground hover:text-atlas-teal
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-teal
                                 active:bg-primary active:text-white
                                 disabled:cursor-not-allowed disabled:opacity-50"
                      aria-label="Mark as accepted answer"
                      title="Mark as accepted answer"
                    >
                      <CheckIcon className="h-5 w-5" />
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
