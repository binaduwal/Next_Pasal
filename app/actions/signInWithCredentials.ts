"use server";

import { signIn } from "@/auth";

export async function signInWithCredentials(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
}
