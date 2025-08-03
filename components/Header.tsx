"use client";
import { navLink } from "@/constants";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;



  const filteredNavLink = navLink.filter((item) => {
    if (item.title === "Sign in" && session) return false;
    if (item.title === "Dashboard" && !session) return false;
    return true;
  });

  return (
    <section className="h-20 fixed top-0 left-0 right-0 bg-white shadow z-50 px-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="flex-grow max-w-xl">
        <SearchInput />
      </div>
      <div className="space-x-10">
        {filteredNavLink.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="hover:text-orange-500 transition-all hidden md:inline-block ease-in-out font-bold"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <IoMenu className="md:hidden inline-flex text-2xl" />
    </section>
  );
};
