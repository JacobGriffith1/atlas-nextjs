"use client";

import { useActionState } from "react";
import { authenticate } from "./actions";

type Props = { callbackUrl: string };

export default function LoginForm({ callbackUrl }: Props) {
  const [state, formAction, pending] = useActionState(authenticate, {});

  return (
    <form
      action={formAction}
      className="w-full max-w-md space-y-4 rounded-lg border bg-white p-6"
    >
      <h1 className="text-xl font-semibold">Log in</h1>

      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          defaultValue=""
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          defaultValue=""
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        />
      </div>

      {state.error ? (
        <p className="rounded-md bg-red-50 p-2 text-sm text-red-700">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
