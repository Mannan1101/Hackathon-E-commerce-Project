import Image from 'next/image'
import React from 'react'

export default function Checkout() {
    return (
        <>
            <div>

                <div className='bg-[url("/images/bg-image/bg-shop.svg")] bg-cover w-full h-[315px] mt-3 mb-10   '>
                    <div className='flex flex-col items-center pt-3'>
                        <Image src={"/images/logo.svg"} alt='LOGO' width={100} height={100} className='' />
                        <h1 className='text-[48px]'>Checkout</h1>
                        <div className='flex'>
                            <pre><h1 className='font-bold'>Home &gt; </h1></pre>
                            <p>Checkout</p>
                        </div>
                    </div>
                </div>



                <div className='p-7 md:p-16 grid lg:grid-cols-2 '>

                    <div>
                        <div className=' flex flex-col mb-9'>
                            <h1 className='text-[36px] font-semibold mb-5'>Billing details</h1>

                            <div className='flex flex-col md:flex-row gap-3'>
                                <div>
                                    <p className='mb-4 text-[16px]'>First Name</p>
                                    <input type="text" name="text" id="text" className='w-[150px] h-[70px] border-[2px] rounded-lg' />
                                </div>
                                <div><p className='mb-4 text-[16px]'>Last Name</p>
                                    <input type="text" name="text" id="text" className='w-[150px] h-[70px] border-[2px] rounded-lg' /></div>
                            </div>

                            <div>
                                <p className='mb-4 text-[16px] mt-4'>Company Name (Optional)</p>
                                <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>

                            <div className="w-64">
                                <p className='mb-4 text-[16px] mt-4'>Country/Region</p>
                                <select
                                    id="country"
                                    name="country"
                                    className="mt-1 block  py-2 px-3 w-[280px] h-[60px] border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="usa">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="pakistan">Pakistan</option>
                                    <option value="india">India</option>
                                </select>
                            </div>


                            <div>
                                <p className='mb-4 text-[16px] mt-4'>Street address</p>
                                <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>


                            <div>
                                <p className='mb-4 text-[16px] mt-4'>Town / City</p>
                                <input type="text" name="text" id="text" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>


                            <div className="w-64">
                                <p className='mb-4 text-[16px] mt-4'>Country/Region</p>
                                <select
                                    id="country"
                                    name="country"
                                    className="mt-1 block  py-2 px-3 w-[280px] h-[60px] border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="usa">SINDH</option>
                                    <option value="canada">PUNJAB</option>
                                    <option value="uk">KPK</option>
                                    <option value="pakistan">BALOCHISTAN</option>
                                    <option value="india">KASHMIR</option>
                                </select>
                            </div>

                            <div>
                                <p className='mb-4 text-[16px] mt-4'>ZIP code</p>
                                <input type="number" name="number" id="number" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>

                            <div>
                                <p className='mb-4 text-[16px] mt-4'>Phone</p>
                                <input type="number" name="number" id="number" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>


                            <div>
                                <p className='mb-4 text-[16px] mt-4'>Email</p>
                                <input type="email" name="email" id="email" className='w-[280px] h-[60px] border-[2px] rounded-lg' />
                            </div>

                            <input type="text" name="text" id="tetx" placeholder='Additional information' className='mt-8 w-[280px] h-[60px] border-[2px] rounded-lg text-center' />


                        </div>
                    </div>


                    <div className='flex flex-col gap-3'>

                        <div className='text-[24px] font-bold flex justify-between'>
                            <h1 className=''>Product</h1>
                            <h1 className=''>Subtotal</h1>
                        </div>

                        <div className='text-[16px] mt-5 text-[#9F9F9F] font-bold flex justify-between'>
                            <h1 className=''>Asgaard sofa X 1</h1>
                            <h1 className=''>Rs. 250,000.00</h1>
                        </div>

                        <div className='text-[16px] mt-5 text-[#9F9F9F] font-bold flex justify-between'>
                            <h1 className='text-black'>Subtotal</h1>
                            <h1 className=''>Rs. 250,000.00</h1>
                        </div>

                        <div className='text-[16px] mt-5 text-[#9F9F9F] font-bold flex justify-between border-b-2 pb-8'>
                            <h1 className='text-black'>Total</h1>
                            <h1 className='text-[22px] text-[#B88E2F]'>Rs. 250,000.00</h1>
                        </div>

                        <div className='flex gap-3 items-center mt-10'>
                            <div className='w-[14px] h-[14px] bg-white border rounded-full hover:bg-black'></div>
                            <h1 className='font-bold'>Direct Bank Transfer</h1>
                        </div>


                        <p className='text-[16px] text-[#9F9F9F] mt-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                        <div className='flex gap-3 items-center mt-10'>
                            <div className='w-[14px] h-[14px] bg-white border rounded-full hover:bg-black'></div>
                            <h1 className='font-bold'>Direct Bank Transfer</h1>
                        </div>

                        <div className='flex gap-3 items-center mt-10'>
                            <div className='w-[14px] h-[14px] bg-white border rounded-full hover:bg-black'></div>
                            <h1 className='font-bold'>Cash On Delivery</h1>
                        </div>

                        <p className='text-[16px] text-black mt-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>


                        <div className='mt-9 flex flex-col  '>
                            <button className='w-[150px] h-[55px] font-bold border rounded-2xl'>Place order</button>
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
