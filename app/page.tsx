import Link from "next/link";

export default function HomePage() {
  // Why: Keep landing minimal; drive navigation via Link (client-side nav).
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Welcome to Atlas Q&A</h1>
      <p className="text-sm opacity-80">
        This is the public homepage. Use the links below to explore.
      </p>

      <nav className="space-x-4">
        {/* Why: Link avoids full reloads and preserves layouts. */}
        <Link href="/about" className="underline">
          About
        </Link>
        <Link href="/ui" className="underline">
          Go to UI (logged-in area)
        </Link>
      </nav>
    </main>
  );
}