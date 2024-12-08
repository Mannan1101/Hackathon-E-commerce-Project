"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type TopPicks = {
    image: string,
    head: string,
}

export default function TopPicks({ image, head }: TopPicks) {
    return (
        <>
            <div className='p-4'>
                <Link href={"/singleProduct"} target='_blank'>
                    <div className='w-full flex flex-col items-center '>

                        <div className=''>
                            <Image src={`/images/topPicks/product${image}.svg`} alt='PRODUCTS' width={100} height={100} className='w-[280px] h-[280px]' />
                        </div>

                        <div>
                            <h1>{head}</h1>
                            <h1 className='text-[24px]'>Rs. 25,000.00</h1>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}



import { MdOutlineWatchLater } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";


type Blog = {
    image: string,
}


export function BlogCards({ image }: Blog) {
    return (
        <>

            <div className='w-full p-2 lg:p-10'>

                
                    <div className=''>
                        <Image src={`/images/blogs/blog${image}.svg`} alt='BLOGS' width={100} height={100} className='w-[390px] h-[390px]' />
                    </div>

                    <div className='flex flex-col items-center gap-1 '>
                        <h1 className='text-[18px]'>Going all-in millennial design</h1>
                        <h1 className='text-[20px] hover:font-semibold underline underline-offset-8 hover:no-underline mb-4'>Read More</h1>

                        <div className='flex items-center gap-1 text-gray-500'>
                            <MdOutlineWatchLater /><h1>5 min</h1>
                            <PiNotepad className='ml-5' /><h1 className=''>12th Oct 2022</h1>
                        </div>
                    </div>

            </div>
        </>
    )
}


export function ShopProductCard({ image, head }: TopPicks) {
    return (
        <>
            <div className='p-4'>
                <Link href={"/singleProduct"} target='_blank'>
                    <div className='w-full flex flex-col items-center '>

                        <div className=''>
                            <Image src={`/images/shopProduct/shop${image}.svg`} alt='PRODUCTS' width={100} height={100} className='w-[280px] h-[280px]' />
                        </div>

                        <div>
                            <h1>{head}</h1>
                            <h1 className='text-[24px]'>Rs. 25,000.00</h1>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}
