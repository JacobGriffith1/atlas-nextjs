import Link from "next/link";

export default function Page() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">About us</h1>

      <p className="text-sm text-gray-600">
        Atlas is a tech school in downtown Tulsa.
      </p>

      <Link className="underline" href="/">
        Back home
      </Link>
    </main>
  );
}
