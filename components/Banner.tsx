import { getBannerData } from "@/lib/getData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const Banner = async () => {
  const banners = await getBannerData();
  const banner = banners[0];

  return (
    <section className="w-full bg-white mt-22">
      <div className="flex flex-col md:flex-row h-[600px]">
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 w-full md:w-1/2  text-black">
          <div className="max-w-2xl">
            <span
              style={{ backgroundColor: "#06923E" }}
              className="text-xs sm:text-sm text-white font-medium px-4 py-1 rounded-full uppercase tracking-wide shadow-md mb-4 inline-block"
            >
              Sale: {banner?.price}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 drop-shadow-xl">
              {banner?.title}
            </h1>
            <p className="text-sm sm:text-base text-black mb-6  max-w-lg">
              {banner?.description}
            </p>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-6 font-medium text-neutral-200">
              <span>Shop now</span>
              <div className="ml-1 transition duration-300 group-hover:rotate-[360deg]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>{" "}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
          <Image
            src={urlFor(banner?.image).url()}
            alt={banner?.title || "Banner Image"}
            fill
            className="object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
