import Link from "next/link";

export default function Page() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Hello Atlas</h1>

      <p className="text-sm text-gray-600">
        This is a public homepage. Use the links below to test routing.
      </p>

      <nav className="flex gap-4">
        <Link className="underline" href="/about">
          About
        </Link>
        <Link className="underline" href="/ui">
          UI (logged-in home)
        </Link>
      </nav>
    </main>
  );
}
