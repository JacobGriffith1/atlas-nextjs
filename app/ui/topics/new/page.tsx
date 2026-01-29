import CreateTopicForm from "@/components/CreateTopicForm";

export default function Page() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Create a new topic</h1>
      <CreateTopicForm />
    </main>
  );
}
