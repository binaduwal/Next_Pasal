"use server";

import { redirect } from "next/navigation";

export async function signInWithGoogle() {
  const params = new URLSearchParams({
    callbackUrl: "/", 
  });

  redirect(`/api/auth/signin/google?${params.toString()}`);
}
