import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sofa() {
  return (
    <>
        <div className='bg-[#FBEBB5] flex flex-col md:flex-row items-center md:-mt-2 '>

            <div className='flex flex-col p-14 mt-7 '>
                <h1 className='text-[64px] '>Rocket single seater</h1>
                <Link href={"/"}><p className='text-[24px] underline underline-offset-8 mt-5 hover:no-underline'>Shop Now</p></Link>
            </div>


            <div className='-mt-[300px] md:mt-0 -mb-48'>
                <Image src={"/images/home/sofa.svg"} alt='SOFA' width={100} height={100} className='w-[850px] h-[1000px]' />
            </div>

        </div>
    </>
  )
}
