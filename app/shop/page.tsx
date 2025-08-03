import ProductList from '@/components/ProductList'
import React from 'react'

const ShopPage = () => {
  return (
    <section className='container mx-auto px-4 py-12'>
      <p className='text-3xl font-semibold'>All available Products</p>
      <ProductList />
    </section>
  );
}

export default ShopPage
