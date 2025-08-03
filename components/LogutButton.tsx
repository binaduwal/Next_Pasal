"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="border-gray-500 border px-3 py-1.5 hover:bg-gray-500 rounded-md mt-4"
    >
      Logout
    </button>
  );
}
