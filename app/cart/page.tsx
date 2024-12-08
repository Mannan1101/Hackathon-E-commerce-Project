import CartBanner from '@/components/cart/CartBanner'
import Navbar from '@/components/Prebuild/navbar'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
            <Navbar bgColor='bg-white' /><br /><br /><br />
            <CartBanner/>
        </div>
    </>
  )
}
