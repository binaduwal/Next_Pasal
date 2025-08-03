import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EmptyCart = () => {
  return (
    <section className="mx-auto flex items-center justify-center h-[90vh] gap-6">
      <Image
        src={"/emptyCart.webp"}
        alt={"empty cart"}
        width={300}
        height={300}
        className="object-contain"
      />
      <div className="shadow-md w-[500px] p-6 rounded-md text-center">
        <h1 className="uppercase text-xl font-bold mb-4">
          Your Cart feels lonely
        </h1>
        <p className="text-gray-600">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          books, electronics, videos, etc. and make it happy.
        </p>
        <Link
          href={"/"}
          className="inline-block text-white rounded-md  bg-orange-500 mt-5 hover:bg-orange-600 px-4 py-2"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default EmptyCart
