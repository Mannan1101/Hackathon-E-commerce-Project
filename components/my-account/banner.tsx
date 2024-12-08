import Image from 'next/image'
import React from 'react'

export default function AccountBanner() {
    return (
        <>
            <div>

                <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3 mb-10   '>
                    <div className='flex flex-col items-center pt-3'>
                        <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                        <h1 className='text-[48px]'>My Account</h1>
                        <div className='flex'>
                            <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                            <p>My Account</p>
                        </div>
                    </div>
                </div>




                <div className='p-7 md:p-16 grid md:grid-cols-2 '>

                    <div className=' flعx flex-col mb-9'>
                        <h1 className='text-[36px] font-semibold mb-5'>Log In</h1>

                        <div>
                            <p className='mb-4 text-[16px]'>Username or email address</p>
                            <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div>
                            <p className='mb-4 mt-8 text-[16px]'>Password</p>
                            <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div className='items-center'>
                            <input type="checkbox" name="tick" id="checkbox" className='mt-10 appearance-none w-5 h-5 border border-blue-500 rounded-sm checked:bg-blue-500 checked:border-none focus:ring-2 focus:ring-blue-400 focus:outline-none' />
                            <label htmlFor="customCheckbox" id='checkbox' className='text-gray-500 ml-5 mb-4 '>Remember me</label>
                        </div>


                        <div className='mt-6 flex flex-col md:flex-row items-center gap-5'>
                            <button className='w-[150px] h-[55px] font-bold border rounded-2xl'>Log In</button>
                            <p className='text-gray-400 hover:underline-offset-8 hover:underline'>Lost Your Password?</p>
                        </div>

                    </div>



                    <div className=' flex flex-col'>
                        <h1 className='text-[36px] font-semibold mb-5'>Register</h1>

                        <div>
                            <p className='mb-4 text-[16px]'>Email address</p>
                            <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div className='text-[16px] grid gap-7 mt-8'>
                            <h1>A link to set a new password will be sent to your email address.</h1>
                            <h1>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy.</span> </h1>
                        </div>

                        <div className='mt-6 md:mt-[65px] flex flex-col  '>
                            <button className='w-[150px] h-[55px] font-bold border rounded-2xl'>Register</button>
                        </div>

                    </div>

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

            </div>
        </>
    )
}
