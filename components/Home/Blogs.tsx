import React from 'react'
import { BlogCards } from '../Prebuild/cards'

export default function Blogs() {
    return (
        <>
            <div id='about'>

                <div className='flex flex-col items-center text-center gap-3 mt-12 mb-1'>
                    <h1 className='text-[36px] font-bold '>Our Blogs</h1>
                    <p className='text-[16px] text-[#9F9F9F] '>Find a bright ideal to suit your taste with our great selection</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    <BlogCards image="1" />
                    <BlogCards image="2" />
                    <BlogCards image="3" />
                </div>

                <div className='flex justify-center mt-12 mb-12'>
                    <h1 className='font-bold text-[22px] underline underline-offset-8 hover:no-underline'>View More</h1>
                </div>

            </div>
        </>
    )
}
