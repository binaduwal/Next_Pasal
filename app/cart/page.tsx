import { auth } from '@/auth'
import CartContainer from '@/components/CartContainer'
import React from 'react'

const CartPage = async() => {

    const session=await auth()
  
  return (
    <div>
      <CartContainer session={session} />
    </div>
  )
}

export default CartPage
