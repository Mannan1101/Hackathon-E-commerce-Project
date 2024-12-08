import AccountBanner from '@/components/my-account/banner'
import Navbar from '@/components/Prebuild/navbar'
import React from 'react'

export default function page() {
  return (
    <>
        <div>
            <Navbar bgColor='bg-white' /><br /><br /><br />
            <AccountBanner/>
        </div>
    </>
  )
}
