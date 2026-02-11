"use client"

import { useMemo, useState } from "react"
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/outline"

type Question = { id: string; text: string };
type Answer = { id: string; text: string };

type Props = {
  question: Question;
  initialAnswers: Answer[];
};

export default function QuestionAnswersClient({ question, initialAnswers }: Props) {
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers);
  const [acceptedAnswerId, setAcceptedAnswerId] = useState<string | null>(null);
  const [newAnswer, setNewAnswer] = useState("");

  const orderedAnswers = useMemo(() => {
    if (!acceptedAnswerId) return answers;

    const accepted = answers.find((a) => a.id === acceptedAnswerId);
    const rest = answers.filter((a) => a.id !== acceptedAnswerId);

    return accepted ? [accepted, ...rest] : answers;
  }, [answers, acceptedAnswerId]);

  function submitAnswer(e: React.FormEvent) {
    e.preventDefault();

    const text = newAnswer.trim();
    if (!text) return;

    const created: Answer = {
      id: `local-${crypto.randomUUID()}`,
      text,
    };

    setAnswers((prev) => [created, ...prev]);
    setNewAnswer("");
  }

  function markAccepted(answerId: string) {
    setAcceptedAnswerId(answerId);
  }

  return (
    <section className="space-y-6">
      {/* Question heading */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold">Question</h1>
        <p className="text-lg">{question.text}</p>
      </header>

      {/* Answer form */}
      <form onSubmit={submitAnswer} className="space-y-3 rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="answer" className="block text-sm font-medium">
          Submit an answer
        </label>

        <textarea
          id="answer"
          name="answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          rows={3}
          placeholder="Write your answer..."
          className="block w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500"
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

      {/* Answers list */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Answers</h2>

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
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  ) : null}

                  <p className="text-sm">{a.text}</p>
                </div>

                <button
                  type="button"
                  onClick={() => markAccepted(a.id)}
                  className="h-9 w-9 rounded-full transition cursor-pointer hover:bg-primary-foreground hover:text-atlas-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-teal active:bg-primary active:text-white"
                  aria-label="Mark as accepted answer"
                  title="Mark as accepted answer"
                >
                  <CheckIcon className="h-5 w-5" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
