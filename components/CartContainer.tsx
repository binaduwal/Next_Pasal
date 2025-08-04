"use client";

import { StoreState } from "@/type";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { resetCart } from "@/app/redux/ShopperSlice";
import EmptyCart from "./EmptyCart";
import { FormattedPrice } from "./FormattedPrice";
import { Session } from "next-auth";

interface CartContainerProps {
  session: Session | null;
}

const CartContainer = ({ session }: CartContainerProps) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure you want to reset cart?");
    if (confirmed) dispatch(resetCart());
  };

  const cartItems = useSelector((state: StoreState) => state?.shoppers?.cart);
  console.log("Cart items", cartItems);

  useEffect(() => {
    const price = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(price);
  }, [cartItems]);

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: cartItems,
        email: session?.user?.email,
      }),
    });

    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <section className="container mx-auto px-4 pt-22">
      {cartItems?.length > 0 ? (
        <div>
          <div className="hidden lg:grid grid-cols-5 bg-gray-100 text-lg font-medium p-6">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>

          <div>
            {cartItems?.map((item, index) => (
              <CartItems
                key={item?._id || index}
                cart={cartItems}
                item={item}
              />
            ))}
          </div>

          <button
            onClick={handleResetCart}
            className="rounded-md bg-red-500 hover:bg-red-600 cursor-pointer text-white p-2"
          >
            Reset Cart
          </button>

          <div className="max-w-7xl flex justify-end">
            <div className="font-medium w-96 p-4 mt-5">
              <h1 className="text-2xl text-end mb-5">Cart totals</h1>
              <div>
                <p className="border-[1px] border-gray-400 px-4 py-1.5 text-lg font-medium flex justify-between">
                  Subtotal <FormattedPrice price={totalAmount} />
                </p>
                <p className="border-[1px] border-gray-400 px-4 py-1.5 text-lg font-medium flex justify-between">
                  Shipping Charge <FormattedPrice price={100} />
                </p>
                <p className="border-[1px] border-gray-400 px-4 py-1.5 text-lg font-medium flex justify-between">
                  Total <FormattedPrice price={100 + totalAmount} />
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={!session?.user}
                  className="text-white bg-orange-500 disabled:bg-orange-600/40 hover:bg-orange-600 px-4 py-2.5 w-full mt-5 rounded-md"
                >
                  Proceed to Checkout
                </button>
                {!session?.user && (
                  <p className="text-center text-sm text-orange-500">
                    Please sign in to proceed to checkout
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default CartContainer;
