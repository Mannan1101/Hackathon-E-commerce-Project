import Image from 'next/image'
import React from 'react'

export default function DescriptionAndReview() {
  return (
    <>
        <div className='border-t-2 pt-10 mb-10'>

            <div className='w-full flex flex-col md:flex-row gap-12 items-center justify-center text-[24px]  '>
                <h1 className=' hover:underline hover:underline-offset-8 text-[#9F9F9F] hover:text-[black]'>Description</h1>
                <h1 className=' hover:underline hover:underline-offset-8 text-[#9F9F9F] hover:text-[black]'>Additional Information</h1>
                <h1 className=' hover:underline hover:underline-offset-8 text-[#9F9F9F] hover:text-[black]'>Reviews [5]</h1>
            </div>

            <div className='text-[16px] text-[#9F9F9F] p-16 flex flex-col gap-10'>
                <p>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>

            <div className=' flex flex-col xl:flex-row gap-5 p-3 items-center justify-center'>
                <Image src={"/images/singleProduct/sofa1.svg"} alt='SOFA' width={100} height={100} className='w-[600px] h-[350px]' />
                <Image src={"/images/singleProduct/sofa2.svg"} alt='SOFA' width={100} height={100} className='w-[600px] h-[350px]' />
            </div>

        </div>
    </>
  )
}
