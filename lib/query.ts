import { groq } from "next-sanity";


export const bannerQuery = groq`*[_type == "banner"] | order(_createdAt asc)`;
export const productQuery = groq`*[_type == "product"] | order(_createdAt asc)`;
export const categoryQuery = groq`*[_type == "category"] | order(_createdAt asc)`;
export const bestSellerquery = `*[_type == "product" && position == "Best seller"]`;