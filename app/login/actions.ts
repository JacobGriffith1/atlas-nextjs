"use server";

import { signIn } from "@/auth";

type LoginState = { error?: string };

function isCredentialsSigninError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const anyErr = err as { type?: string; code?: string };
  return anyErr.type === "CredentialsSignin" || anyErr.code === "credentials";
}

export async function authenticate(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "/ui");

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
    });

    return {};
  } catch (err: unknown) {
    if (isCredentialsSigninError(err)) {
      return { error: "Invalid email or password." };
    }

    throw err;
  }
}
