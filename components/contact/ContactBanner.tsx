import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";




export default function ContactBanner() {
    return (
        <>
            <div>


                <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3   '>
                    <div className='flex flex-col items-center pt-3'>
                        <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                        <h1 className='text-[48px]'>Contact</h1>
                        <div className='flex'>
                            <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col gap-3 justify-center items-center text-center mt-10 mb-10'>
                    <h1 className='text-[36px] font-bold'>Get In Touch With Us</h1>
                    <p className='text-[#9F9F9F] texr-[16px] '>For More Information About Our Product & Services. Please Feel Free <br /> To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>


                <div className='grid md:grid-cols-2 lg:p-56 lg:-mt-48 p-4'>

                    <div>
                        <div className='flex flex-row gap-5 p-4 '>
                            <FaLocationDot className='w-[22px] h-[28px]' />
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] '>Address</h1>
                                <p className='text-[16px]'>236 5th SE Avenue, <br />New York NY10000,<br /> United States</p>
                            </div>
                        </div>

                        <div className='flex flex-row gap-5 mt-10 '>
                            <FaPhoneAlt className='w-[22px] h-[28px]' />
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] '>Phone</h1>
                                <p className='text-[16px]'>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
                            </div>
                        </div>


                        <div className='flex flex-row gap-5 mt-10 '>
                            <IoTimeSharp className='w-[25px] h-[30px]' />
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] '>Working Time</h1>
                                <p className='text-[16px]'>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>


                    </div>



                    <div className='flex flex-col gap-5 mt-10 md:mt-0'>

                        <div>
                            <p className='mb-4 text-[16px] mt-4'>Your Name</p>
                            <input type="text" name="text" id="text" placeholder='Abc' className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div>
                            <p className='mb-4 text-[16px] mt-4'>Email Address</p>
                            <input type="email" name="email" id="email" placeholder='Abc@def.com' className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div>
                            <p className='mb-4 text-[16px] mt-4'>Subject</p>
                            <input type="text" name="text" id="text" placeholder='This is an optional' className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                        </div>

                        <div className='flex  flex-col '>
                            <p className='mb-4 text-[16px] mt-4'>Message</p>
                            <textarea name="message" id="message" placeholder='Hi! i did like to ask about' className='w-[280px] h-[120px] border-[2px] rounded-lg'></textarea>
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
