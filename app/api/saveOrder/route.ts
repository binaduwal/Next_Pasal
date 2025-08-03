import adminDB from "@/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    console.log("This is reqbody",reqBody);
    const { cartItems, totalAmount, id, email } = reqBody;
    console.log(cartItems, totalAmount, id, email);
    const orderData = {
      items: cartItems || [],
      amount: totalAmount,
      id,
      email,
    };

    if (cartItems.length) {
      const userOrderRef = adminDB
        .collection("users")
        .doc(email)
        .collection("orders")
        .doc(id);
      await userOrderRef.set({ value: orderData }, { merge: true });
    }


    return NextResponse.json(
      {
        sucess: true,
        message: "order saved",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      sucess: false,
      message: error,
    });
  }
};
