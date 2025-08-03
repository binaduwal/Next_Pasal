import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellerquery,productQuery, categoryQuery } from "./query";
export const revalidate=0

export const getBannerData=async()=>{
const bannerData=client.fetch(bannerQuery)
return bannerData
}
export const getCategoryData=async()=>{
const categoryData=client.fetch(categoryQuery)
return categoryData
}
export const getBestSellerData = async () => {
  const bestSellerData = client.fetch(bestSellerquery);
  return bestSellerData;
};

export const getProductsData = async () => {
  const productsData = client.fetch(productQuery);
  return productsData;
};