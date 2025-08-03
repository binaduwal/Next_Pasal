import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative group ">
      <h2 className="uppercase text-2xl px-4 ml-6 hover:text-orange-400 transition-all ease-in-out font-bold">
        Next pasal
      </h2>
      <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
};

export default Logo;
