import LoginForm from "./LoginForm";

type PageProps = {
  searchParams?: Promise<{ callbackUrl?: string }>;
};

export default async function Page(props: PageProps) {
  const sp = (await props.searchParams) ?? {};
  const callbackUrl = sp.callbackUrl ?? "/ui";

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <LoginForm callbackUrl={callbackUrl} />
    </main>
  );
}
