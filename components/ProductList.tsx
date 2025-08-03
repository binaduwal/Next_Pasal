import { getProductsData } from "@/lib/getData";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "@/type";

const ProductList = async () => {
  const products: ProductData[] = await getProductsData();
  return (
    <div className="pt-20 mx-auto  mb-10 container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
      {products?.map((item) => (
        <div key={item._id} className="h-full">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
