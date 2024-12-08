import Image from 'next/image'
import React from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";


export default function CartBanner() {
    return (
        <>
            <div>

                <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3   '>
                    <div className='flex flex-col items-center pt-3'>
                        <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                        <h1 className='text-[48px]'>Cart</h1>
                        <div className='flex'>
                            <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>





                <div className='grid md:flex justify-between'>

                    <div className='p-1'>

                        <div className='grid md:flex justify-between items-center font-bold rounded-[5px] p-7 w-[320px] md:w-[650px] h-full md:h-[50px] bg-[#FFF9E5] mt-10'>
                            <h1>Product</h1>
                            <h1>Product Name</h1>
                            <h1>Price</h1>
                            <h1>Subtotal</h1>
                        </div>


                        <div className='grid md:flex justify-between items-center font-bold rounded-[5px] p-7 w-[310px] md:w-[650px] h-full md:h-[50px] mt-14'>
                            <Image src={"/images/cart/cart1.svg"} alt='CART ITEMS' width={100} height={100} className='w-[100px] h-[100px]' />
                            <h1 className='text-[#9F9F9F]'>Asgaard sofa</h1>
                            <h1 className='text-[#9F9F9F]'>Rs. 250,000.00</h1>
                            <h1 className=''>Rs. 250,000.00</h1>
                            <RiDeleteBin7Fill className='text-[#FBEBB5] w-[21px] h-[21px] hover:text-black' />
                        </div>

                    </div>

                    <div className='w-[390px] h-[290px] bg-[#FFF9E5] flex flex-col items-center justify-center mt-11'>
                        <h1 className='font-bold text-[32px]'>Cart Totals</h1>

                        <div className='flex justify-between mt-8'>
                            <h1 className='text-[16px] font-bold'>Subtotal</h1>
                            <p className='text-[#9F9F9F] text-[16px] ml-7'>Rs. 250,000.00</p>
                        </div>

                        <div className='flex justify-between mt-8'>
                            <h1 className='text-[16px] font-bold'>Total</h1>
                            <p className='text-[#B88E2F] text-[16px] ml-7'>Rs. 250,000.00</p>
                        </div>

                    </div>

                </div>




                <div className='w-full h-full  flex flex-col justify-between items-center p-5  gap-5 lg:flex-row bg-[#FAF4F4] mb-24 lg:mt-20 mt-80'>

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
