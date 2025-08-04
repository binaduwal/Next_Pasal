import React from "react";
import { BiHome } from "react-icons/bi";
import { FaRegCircleCheck, FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

const SuccessfulMessage = () => {
  return (
    <section className="mx-auto container flex flex-col items-center mt-5">
      <div className="rounded-full bg-green-100 p-2 h-[120px] w-[120px] flex items-center justify-center">
        <FaRegCircleCheck className="h-[80px] w-[80px] text-green-500" />
      </div>
      <div className="w-[400px] mt-10 space-y-8">
        <h1 className="font-bold text-3xl">Success!</h1>
        <p className="text-gray-500 text-sm">
          Your action has been completed successfully.
        </p>
        <p className="text-gray-700">
          Thank you for your submission. We&apos;ve received your information and
          will process it shortly. You should receive a confirmation email
          within the next few minutes.
        </p>
      </div>

      <div className="flex gap-5 justify-center">
        <Link href={"/"}>
          <button className="flex bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md items-center space-x-2 mt-6">
            <BiHome className="text-xl" />
            <p>Home</p>
          </button>
        </Link>

        <Link href={"/order"}>
          <button className="flex bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md items-center space-x-2 mt-6">
            <AiOutlineInfoCircle className="text-xl" />
            <p>Order</p>
          </button>
        </Link>

        <Link href={"/contact"}>
          <button className="flex bg-purple-500 hover:bg-purple-600 text-white px-4 py-1.5 rounded-md items-center space-x-2 mt-6">
            <FaRegEnvelope className="text-xl" />
            <p>Contact</p>
          </button>
        </Link>
      </div>

      <div className="mt-4 flex space-x-4">
        <div className="w-3 h-3 rounded-full bg-green-300"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </section>
  );
};

export default SuccessfulMessage;
