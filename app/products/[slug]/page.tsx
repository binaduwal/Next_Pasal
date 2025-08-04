import AddToCardButton from "@/components/AddToCardButton";
import { FormattedPrice } from "@/components/FormattedPrice";
import ProductCard from "@/components/ProductCard";
import { getBestSellerData } from "@/lib/getData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/type";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

type Params = {
  params: { slug: string };
};

const SingleProductPage = async ({ params }: Params): Promise<JSX.Element> => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    _id,
    title,
    description,
    price,
    row_price,
    ratings,
    reviews,
    image,
    slug,
    category,
    Brand,
    quantity,
    New_arrivals
  }`;
  const product: ProductData = await client.fetch(query, { slug: params.slug });

  const bestSeller = await getBestSellerData();
  const relatedProducts = bestSeller.filter(
    (item: ProductData) => item._id !== product._id
  );

  return (
    <section className="pt-24 container mx-auto px-4">
      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-20 mt-10">
        {/* Product Image */}
        <div className="w-[500px] sm:text-wrap top-24">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title || "Product Image"}
              width={600}
              height={600}
              className="w-full h-auto rounded-xl shadow-md object-contain"
            />
          )}
        </div>

        {/* Product Info */}
        {product && (
          <div className="space-y-6 w-[500px]">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">
              {product.title}
            </h1>

            {/* Pricing */}
            <div className="flex flex-wrap items-center gap-4">
              <FormattedPrice
                price={product.row_price || product.price}
                className="line-through text-gray-400 text-lg"
              />
              <FormattedPrice
                price={product.price}
                className="text-3xl text-orange-600 font-bold"
              />
              {product.row_price && product.row_price > product.price && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  You save
                  <FormattedPrice
                    price={product.row_price - product.price}
                    className="inline ml-1"
                  />
                </span>
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product.ratings || 0);
                const halfFilled =
                  index + 1 > Math.floor(product.ratings || 0) &&
                  index + 1 < Math.ceil(product.ratings || 0);
                return (
                  <span
                    key={index}
                    className={
                      filled
                        ? "text-yellow-500"
                        : halfFilled
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }
                  >
                    <IoStar className="text-xl" />
                  </span>
                );
              })}
              <span className="ml-2 text-gray-500 text-sm">
                ({product.reviews || 0} customer reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {product.description}
            </p>

            <AddToCardButton item={product} />
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Related Best Sellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          ) : (
            <p className="text-gray-500">No related products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
