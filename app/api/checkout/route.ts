import { ProductData } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_KEY as string);
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { item, email } = reqBody;

    const existingProduct = item?.map((item: ProductData) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item.title,
          description: item.description,
        },
      },
    }));

    const origin = request.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: existingProduct,
      mode: "payment",
      success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/canceled/?canceled=true`,
      metadata: {
        email,
      },
    });


    return NextResponse.json({ url: session?.url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
