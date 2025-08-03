"use client";
import Link from "next/link";
import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { StoreState } from "@/type";

const SidebarCart = () => {
  const cartItems = useSelector((state: StoreState) => state?.shoppers?.cart);

  return (
    <div>
      <Link
        style={{ boxShadow: "0 4px 6px -1px #06923E, 0 2px 4px -2px #06923E" }}
        href={"/cart"}
        className="border-gray-400 w-16 h-18 shadow-md right flex flex-col justify-center items-center rounded group relative"
      >
        <div>
          <PiShoppingCartFill className="text-2xl" />
        </div>
        <p className="text-xs">Buy now</p>
        <p className="top-0 right-2 absolute text-xs rounded-full text-center text-white w-4 h-4 bg-orange-600 ">
          {cartItems ? cartItems.length : 0}
        </p>
      </Link>
    </div>
  );
};

export default SidebarCart;
