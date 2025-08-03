import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { signInWithCredentials } from "../actions/signInWithCredentials";
import Image from "next/image";
import React from "react";

const SignInPage = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-300 to-pink-200 px-6 pt-24 font-sans">
      {/* Container */}
      <div className="max-w-md w-full space-y-12 bg-white rounded-3xl shadow-2xl p-10">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-indigo-900 tracking-wide mb-8">
          Welcome Back
        </h2>

        {/* Email/Password Form */}
        <form
          action={signInWithCredentials}
          className="space-y-8"
        >
          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full border border-indigo-300 px-5 py-3 rounded-3xl text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-600 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full border border-indigo-300 px-5 py-3 rounded-3xl text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-3xl font-bold tracking-wide hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Divider with OR */}
        <div className="flex items-center justify-center gap-3 text-indigo-500 font-semibold text-lg">
          <hr className="flex-grow border-indigo-300" />
          <span>OR</span>
          <hr className="flex-grow border-indigo-300" />
        </div>

        {/* Google Sign-In */}
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
          className="flex items-center justify-center gap-4 text-indigo-900 border border-indigo-600 p-3 px-7 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300 cursor-pointer select-none font-semibold tracking-wide"
        >
          <Image src="/google.png" alt="Google" width={26} height={26} />
          <button type="submit" className="text-lg">
            Sign in with Google
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
