import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/app/redux/ShopperSlice";
import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { FormattedPrice } from "./FormattedPrice";
import { BiMinus, BiPlus } from "react-icons/bi";

interface Props {
  cart: ProductData[];
  item: ProductData;
}

const CartItems = ({ cart, item }: Props) => {
  const [existingProduct, setExistingProduct] = useState <ProductData | null> (
    null
  );
  const dispatch = useDispatch();

   useEffect(()=>{
    const availableProduct=cart?.find((product)=>product._id===item._id)
    if(availableProduct)
    {
      setExistingProduct(availableProduct)
    
    }
  },[cart,item])

  const handleMinus=()=>{
    if(existingProduct?.quantity >1)
    {
      dispatch(decreaseQuantity(item?._id))
      toast.success("Quantity decreased")
    }
    else{
      toast.error("Minimum quantity is 1");
    }
  }

  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-5 py-2 mb-4 border border-gray-100  font-medium w-full">
      {/* Product */}
      <div className="flex gap-4 ml-4 col-span-5 md:col-span-2 items-center cursor-pointer">
        <ImCross
          onClick={() => {
            dispatch(removeFromCart(item?._id));
            toast.success("Removed from cart");
          }}
          className="hover:text-red-600"
        />
        {item.image && (
          <Link href={`/products/${item.slug?.current}`}>
            <Image
              width={200}
              height={200}
              src={urlFor(item.image).url()}
              alt={item.title}
              className="w-32 h-32 object-contain"
            />
          </Link>
        )}
        <h1 className="font-medium">{item.title}</h1>
      </div>

      {/* Price */}
      <div className="col-span-5 md:col-span-1 flex items-center font-medium">
        <p>
          <FormattedPrice price={item.price} />
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-6">
        <button>
          <BiMinus onClick={handleMinus} className="border border-gray-300 w-5 h-5 hover:border-orange-400 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
        </button>
        <p>{item.quantity}</p>

        <button onClick={()=>{dispatch(increaseQuantity(item?._id)); toast.success("Quantity increased") } }>
          <BiPlus className="border border-gray-300 w-5 h-5 hover:border-orange-400 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
        </button>
      </div>

      {/* total price */}
      <div className="flex items-center">
        <FormattedPrice price={item?.quantity * item.price} />
      </div>
    </div>
  );
};

export default CartItems;
