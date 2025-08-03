import { auth } from "@/auth";
import LogoutButton from "@/components/LogutButton";
import Image from "next/image";
import React from "react";

const Dashboard = async () => {
  const session = await auth();

  return (
    <section className="container mx-auto px-4 pt-24">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl mx-auto mb-10 mt-10">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Welcome to your dashboard!
        </h1>

        <div className="flex items-center gap-4 mb-6">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "Profile"}
              width={60}
              height={60}
              className="rounded-full border-2 border-[#06923E]"
            />
          )}
          <div>
            <p className="text-lg font-medium text-gray-800">
              {session?.user?.name || "Profile"}
            </p>
            <p className="text-sm text-gray-500">
              {session?.user?.email || "Email not available"}
            </p>
          </div>
        </div>

        <div className="text-center">
          <LogoutButton />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
