import React from 'react'

export default function Instagram() {
  return (
    <>
        <div className='mb-20'>
            <div className='bg-[url("/images/bg-image/bg-instagram.svg")] bg-cover w-full h-[450px] flex flex-col items-center justify-center text-center '>
                <h1 className='text-[60px] font-bold'>Our Instagram</h1> 
                <p className='text-[20px] mt-2 mb-5'>Follow our store on Instagram</p>
                <button className='w-[190px] h-[45px] font-bold rounded-full shadow-lg hover:shadow-xl bg-[#FAF4F4] hover:bg-[#e7c9c9de]   '>Follow Us</button>
            </div>
        </div>
    </>
  )
}
