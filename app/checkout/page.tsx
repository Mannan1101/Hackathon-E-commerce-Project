import Checkout from '@/components/checkout/checkout'
import Navbar from '@/components/Prebuild/navbar'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
            <Navbar bgColor='bg-white'/> <br /><br /><br />
            <Checkout/>
        </div>
    </>
  )
}
