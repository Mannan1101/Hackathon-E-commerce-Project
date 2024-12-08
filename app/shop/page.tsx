import Navbar from '@/components/Prebuild/navbar'
import ShopBanner from '@/components/shop/ShopBanner'
import ShopProduct from '@/components/shop/ShopProduct'
import React from 'react'

export default function Page() {
  return (
    <>

        <div>
        <Navbar bgColor='bg-[white]'/> <br />
        <ShopBanner/>
        <ShopProduct/>
        </div>
    </>
  )
}
