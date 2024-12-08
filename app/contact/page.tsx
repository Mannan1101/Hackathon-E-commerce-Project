import ContactBanner from '@/components/contact/ContactBanner'
import Navbar from '@/components/Prebuild/navbar'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
            <Navbar bgColor='bg-white' /> <br /><br />
            <ContactBanner/>
        </div>
    </>
  )
}
