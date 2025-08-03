import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";
import { FormattedPrice } from "./FormattedPrice";
import AddToCardButton from "./AddToCardButton";

const ProductCard = ({ item }: { item: ProductData }) => {
  return (
    <section className="relative group h-full ">
        <div className="flex flex-col justify-between h-full p-4 shadow-md rounded-md">

        <Link href={`/products/${item.slug.current}`}>
          <Image
            src={urlFor(item.image).url()}
            alt={item.title}
            loading="lazy"
            width={500}
            height={500}
            className="object-contain w-full h-72 group-hover:scale-105 transition-all duration-500 cursor-pointer shadow-md "
          />
        </Link>
        <div className="flex  text-yellow-600 space-y-2 justify-center mt-4 ">
          {Array.from({ length: 5 }).map((_, index) => {
            const filled = index + 1 <= Math.floor(item?.ratings);
            const halfFilled =
              index + 1 > Math.floor(item?.ratings) &&
              index + 1 < Math.ceil(item?.ratings);

            return (
              <p
                key={index}
                className={
                  filled
                    ? "text-yellow-600"
                    : halfFilled
                      ? "text-yellow-400"
                      : "text-gray-300"
                }
              >
                <IoStar />
              </p>
            );
          })}
        </div>
        <div className="text-center space-y-1 mt-2 px-2 ">
          <p>{item.title}</p>
          <p>{item.description}</p>
          <div className="space-x-3">
            <FormattedPrice
              price={item.row_price}
              className="line-through text-gray-600 "
            />
            <FormattedPrice price={item.price} className="text-orange-600" />
          </div>
          <AddToCardButton item={item} />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
