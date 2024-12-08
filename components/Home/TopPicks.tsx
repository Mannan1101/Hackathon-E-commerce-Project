import React from 'react'
import TopPicksCard from '../Prebuild/cards'

export default function TopPicks() {
  return (
    <>
        <div className='flex flex-col items-center text-center gap-3 mt-12 mb-12'>
            <h1 className='text-[36px] font-bold '>Top Picks For You</h1>
            <p className='text-[16px] text-[#9F9F9F] '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <TopPicksCard image="1" head='Trenton modular sofa_3' />
            <TopPicksCard image="2" head='Granite dining table chair' />
            <TopPicksCard image="3" head='Outdoor bar table and stool' />
            <TopPicksCard image="4" head='Plain console with teak mirror' />
        </div>

        <div className='flex justify-center mt-12 mb-12'>
            <h1 className='font-bold text-[22px] underline underline-offset-8 hover:no-underline'>View More</h1>
        </div>
    </>
  )
}
