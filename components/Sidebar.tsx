import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r p-4 space-y-3">
      <h2 className="text-lg font-medium">Atlas UI</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/ui" className="hover:underline">Home</Link>
        <Link href="/ui/topics/new" className="hover:underline">New Topic</Link>
        <Link href="/ui/topics/123" className="hover:underline">Sample Topic #123</Link>
      </nav>
    </aside>
  );
}