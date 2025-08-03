"use client";
import { resetCart } from "@/app/redux/ShopperSlice";
import { StoreState } from "@/type";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlowerLoader } from "./Loader";
import SuccessfulMessage from "./SuccessfulMessage";

const SuccessContainer = ({ id }: { id: string }) => {
  const cartItems = useSelector((state: StoreState) => state?.shoppers?.cart);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const totalAmount = useMemo(() => {
    if (!cartItems?.length) return 0;
    return cartItems.reduce(
      (acc, item) => acc + (item?.price || 0) * (item?.quantity || 0),
      0
    );
  }, [cartItems]);

  const handleSaveOrder = useCallback(async () => {
    if (totalAmount === 0) return;
    setLoading(true);
    try {
      const response = await fetch("/api/saveOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          totalAmount,
          email: session?.user?.email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data?.success) {
          dispatch(resetCart());
        }
      } else {
        console.error("Failed to save order:", await response.text());
      }
    } catch (error) {
      console.error("Error saving order:", error);
    } finally {
      setLoading(false);
    }
  }, [id, totalAmount, session, dispatch]);

  useEffect(() => {
    if (session?.user && cartItems?.length > 0) {
      handleSaveOrder();
    }
  }, [session, cartItems, handleSaveOrder]);

  return (
    <section>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <FlowerLoader title="Payment is processing...Please wait..." />
        </div>
      ) : (
        <div className="p-8 text-center">
          <SuccessfulMessage />
        </div>
      )}
    </section>
  );
};

export default SuccessContainer;
