"use client"; // Form uses client-side handlers; mark this as a client component.

import { useState, FormEvent } from "react";

export default function NewTopicPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Placeholder submit; wire to real action/API later.
    alert(`Would create topic:\nName: ${name}\nDesc: ${desc}`);
    setName("");
    setDesc("");
  }

  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-semibold">Create a new topic</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
            placeholder="e.g., Next.js"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
            rows={4}
            placeholder="Short description"
          />
        </div>

        <button
          type="submit"
          className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Create Topic
        </button>
      </form>
    </div>
  );
}