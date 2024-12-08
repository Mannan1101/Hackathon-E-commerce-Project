import Blogs from '@/components/Home/Blogs'
import Instagram from '@/components/Home/Instagram'
import NewArrival from '@/components/Home/NewArrival'
import Sofa from '@/components/Home/sofa'
import Table from '@/components/Home/table'
import TopPicks from '@/components/Home/TopPicks'
import Navbar from '@/components/Prebuild/navbar'
import React from 'react'

export default function Home() {
  return (
    <>
      <div>
        <Navbar bgColor='bg-[#FBEBB5]' />
        <Sofa/>
        <Table/>
        <TopPicks/>
        <NewArrival/>
        <Blogs/>
        <Instagram/>
      </div>
    </>
  )
}
