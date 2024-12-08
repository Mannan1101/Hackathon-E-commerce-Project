import Image from 'next/image'
import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoGrid } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";


export default function
    div() {
    return (
        <>
            <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3   '>
                <div className='flex flex-col items-center pt-3'>
                    <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                    <h1 className='text-[48px]'>Shop</h1>
                    <div className='flex'>
                        <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                        <p>Shop</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-full md:h-[100px] bg-[#FAF4F4] mt-10 gap-3 flex justify-between mb-10 p-3'>

                <div className='flex flex-col md:flex-row items-center gap-2 '>
                    <VscSettings />
                    <h1>Filter</h1>
                    <IoGrid />
                    <BsViewList />
                    <div className='md:border-l-4 ml-2 '>
                        <p className='ml-8'>Showing 1 to 16 of 32 results</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-2'>
                    <h1>Show</h1>
                    <input type="number" name="num" id="number" placeholder='16' className='w-[50px] h-[50px] text-center' />
                    <h1>Short by</h1>
                    <input type="number" name="num" id="number" placeholder='Default' className='w-[150px] h-[50px] text-center' />
                </div>

            </div>

        </>
    )
}
