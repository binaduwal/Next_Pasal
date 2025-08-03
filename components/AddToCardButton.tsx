'use client'
import { addToCart } from '@/app/redux/ShopperSlice';
import { ProductData } from '@/type';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
interface Props {
  item:ProductData
}
const AddToCardButton = ({item}:Props) => {
  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(item));
    toast.success(`${item.title.substring(0,12)} added to cart`)
  }

  return (
    <button  onClick={handleAddToCart} className="px-4 py-2 mt-4 w-full font-bold bg-black text-white rounded-md hover:bg-orange-500 transition duration-300">
      Add to Cart
    </button>
  );
}

export default AddToCardButton
