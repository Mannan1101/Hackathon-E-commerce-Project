import Image from 'next/image'
import React from 'react'

export default function NewArrival() {
  return (
    <>
        <div className='bg-[#FFF9E5] flex flex-col items-center md:flex-row lg:p-10'>

            <div>
                <Image src={"/images/newArrival/sofa.svg"} alt='NEW ARRIVALS' width={100} height={100} className='w-[900px] h-[400px]' />
            </div>

            <div className='w-full flex flex-col items-center gap-5 mb-8 lg:mb-0 '>
                <p className='text-[24px]'>New Arrivals</p>
                <h1 className='text-[48px] font-bold'>Asgaard sofa</h1>
                <button className='w-[200px] h-[64px] font-bold rounded-[5px] border hover:bg-black hover:text-white  '>Order Now</button>
            </div>

        </div>
    </>
  )
}
