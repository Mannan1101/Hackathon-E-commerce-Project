import Image from 'next/image'
import React from 'react'

export default function Table() {
  return (
    <>
        <div className='bg-[#FAF4F4] w-full'>

            <div className='flex flex-col xl:flex-row'>
                <Image src={"/images/home/sideTable1.svg"} alt='SIDE TABLE 1' width={100} height={100} className='w-[600px] h-[560px]'/>
                <Image src={"/images/home/sideTable2.svg"} alt='SIDE TABLE 2 ' width={100} height={100} className='w-[600px] h-[560px] -mt-44 md:-mt-0'/>
            </div>

        </div>
    </>
  )
}
