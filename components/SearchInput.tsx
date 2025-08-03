'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
    const [search,setSearch]=useState("")
  return (
    <form className="hidden md:flex items-center border border-gray-300 rounded overflow-hidden bg-gray-50">
      <span className="px-3 text-gray-500">
        <CiSearch className="w-5 h-5" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 bg-transparent focus:outline-none"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      {search && (
        <IoMdClose onClick={()=>setSearch("")} className="text-gray-500 cursor-pointer w-8 h-8"/>
      )}
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
