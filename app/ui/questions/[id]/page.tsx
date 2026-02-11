import QuestionAnswersClient from "@/components/QuestionAnswersClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: PageProps) {
  const { id } = await props.params;

  const question = {
    id,
    text: "How do React Server Components differ from client components?",
  };

  const answers = [
    { id: "a1", text: "Server components run on the server and can fetch data directly." },
    { id: "a2", text: "Client components can use hooks like useState/useEffect." },
    { id: "a3", text: "Server components reduce client JS bundle size." },
  ];

  return (
    <main className="p-6 space-y-6">
      <QuestionAnswersClient question={question} initialAnswers={answers} />
    </main>
  );
}
