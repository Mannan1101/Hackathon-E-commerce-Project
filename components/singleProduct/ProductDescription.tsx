"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";





export default function ProductDescription() {



    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };



    return (
        <>
            <pre>
                <div className='flex gap-2 p-4'>
                    <h1 className='text-[#9F9F9F]'>Home &gt; </h1>
                    <h1 className='text-[#9F9F9F]'>Shop &gt; </h1>
                    <h1 className='border-l-4'> Asgaard sofa</h1>
                </div>
            </pre>


            <div className='flex flex-col lg:flex-row justify-around mt-14 lg:p-28 p-5 '>


                <div className='w-full h-full'>
                    <Image src={"/images/singleProduct/MainProduct.svg"} alt='MAIN ITEMS' width={100} height={100} className='w-[500px] h-[500px]' />
                </div>

                <div>
                    <h1 className='text-[42px]'>Asgaard sofa</h1>
                    <p className='text-[#9F9F9F]'>Rs. 250,000.00</p>

                    <div className='flex'>
                        <Image src={"images/singleProduct/stars.svg"} alt='STAR' width={100} height={100} className='w-[px]' />
                        <p className='border-l-4 pl-3' >5 Customer Review</p>
                    </div>

                    <p className='text-[13px] mt-4'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>


                    <h1 className='text-[15px] text-[#9F9F9F] p-4 mt-4 '>Size</h1>
                    <div className='flex flex-row gap-10 items-center mb-5 p-4'>
                        <button className='w-[40px] h-[40px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5]'>L</button>
                        <button className='w-[40px] h-[40px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5]'>XL</button>
                        <button className='w-[40px] h-[40px] rounded-lg bg-[#FAF4F4] hover:bg-[#FBEBB5]'>XS</button>
                    </div>


                    <h1 className='text-[15px] text-[#9F9F9F] p-4 mt-4 '>Color</h1>
                    <div className='flex flex-row gap-5 ml-4'>
                        <div className='w-[30px] h-[30px] rounded-full bg-[#816DFA] hover:border-[6px] hover:border-[#816DFA] hover:bg-white'></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-[black] hover:border-[6px] hover:border-[black] hover:bg-white'></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-[#CDBA7B] hover:border-[6px] hover:border-[#CDBA7B] hover:bg-white'></div>
                    </div>


                    <div className='flex flex-col md:flex-row items-center  mt-10 gap-3 border-b-2 pb-16'>
                        <div className="flex items-center justify-between border rounded-lg w-[180px] h-[50px] px-5 shadow-sm">
                            <button
                                onClick={decrement}
                                className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
                            >
                                -
                            </button>
                            <span className="text-lg font-medium">{quantity}</span>
                            <button
                                onClick={increment}
                                className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
                            >
                                +
                            </button>
                        </div>

                        <button className='w-[180px] h-[50px] rounded-lg border hover:bg-black hover:text-white '>Add To Cart</button>

                    </div>



                    <div className='pt-8 text-[18px] text-[#9F9F9F] font-serif mb-5'>
                        <pre className='flex flex-col gap-5'>
                        <h1>SKU       : SS001</h1>
                        <h1>Category  : Sofas</h1>
                        <h1>Tags      : Sofa, Chair, Home</h1>
                        <div className='flex gap-3'>
                        <h1>Share     : </h1>
                        <FaFacebook className='text-black w-[25px] h-[25px]' />
                        <FaLinkedin className='text-black w-[25px] h-[25px]' />
                        <AiFillTwitterCircle className='text-black w-[25px] h-[25px]' />
                        </div>
                        </pre>
                    </div>




                </div>

            </div>

        </>
    )
}
