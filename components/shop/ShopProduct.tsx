import React from 'react'
import { ShopProductCard } from '../Prebuild/cards'

export default function ShopProduct() {
    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10'>
                <ShopProductCard image='1' head='Trenton modular sofa_3 ' />
                <ShopProductCard image='2' head='Granite and table dining chair' />
                <ShopProductCard image='3' head='Outdoor table and stool' />
                <ShopProductCard image='4' head='Plain console teak mirror' />
                <ShopProductCard image='5' head='Grain coffee table' />
                <ShopProductCard image='6' head='Kent coffee table' />
                <ShopProductCard image='7' head='Round coffee tablecolor' />
                <ShopProductCard image='8' head='Reclaimed coffee table' />
                <ShopProductCard image='9' head='Plain console_' />
                <ShopProductCard image='10' head='Reclaimed teak Sideboard' />
                <ShopProductCard image='11' head='SJP_0825' />
                <ShopProductCard image='12' head='Bella chair and table' />
                <ShopProductCard image='13' head='Granite square side table' />
                <ShopProductCard image='14' head='Asgaard sofa' />
                <ShopProductCard image='15' head='Maya sofa three seater' />
                <ShopProductCard image='16' head='Outdoor sofa set' />
            </div>

            <div className='flex flex-col md:flex-row gap-4 justify-center items-center mt-4 mb-16'>
                <button className='w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px] '>1</button>
                <button className='w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px] '>2</button>
                <button className='w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px] '>3</button>
                <button className='w-[65px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px] '>Next</button>
            </div>

            <div className='w-full h-full  flex flex-col justify-between items-center p-5  gap-5 lg:flex-row bg-[#FAF4F4] mb-24'>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px]'>Free Delivery</h1>
                    <p className='text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px] '>90 Days Return</h1>
                    <p className='text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>

                <div className='mt-10 mb-10'>
                    <h1 className='text-[32px]'>Secure Payment</h1>
                    <p className='text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>

            </div>

        </>
    )
}
