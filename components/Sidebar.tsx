import Link from "next/link";
import React from "react";
import { BiSolidUserAccount } from "react-icons/bi";
import SidebarCart from "./SidebarCart";
import { auth } from "@/auth";
import Image from "next/image";

const Sidebar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <section className="fixed  bg-white top-60 right-1 px-1  space-y-2">
      <Link
        href={session?.user ? "/dashboard" : "/signin"}
        className="border-gray-400 w-16 h-18 right flex flex-col justify-center items-center rounded"
        style={{ boxShadow: "0 4px 6px -1px #06923E, 0 2px 4px -2px #06923E" }}
      >
        <div>
          {session?.user?.image ? (
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name || "Profile"}
              width={20}
              height={20}
              className="rounded-full"
            />
          ) : (
            <BiSolidUserAccount className="text-2xl" />
          )}
        </div>
        <p className="text-xs">Profile</p>
      </Link>

      <SidebarCart />
    </section>
  );
};

export default Sidebar;
