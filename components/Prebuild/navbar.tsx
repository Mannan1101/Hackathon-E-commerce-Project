import React from 'react'
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
import { IoBagCheckOutline } from "react-icons/io5";



type Navbar = {
    bgColor: string;
} 


export default function Navbar({bgColor}:Navbar) {
  return (
    <>
        <div className={`${bgColor} flex justify-between flex-col md:flex-row h-[80px]   items-center px-10 py-2`}>

            <div className='flex mt-8'>
                <ul className='flex gap-8 lg:gap-16 lg:ml-[300px] font-semibold'>
                    <Link href={"/"}><li className='underline underline-offset-8 hover:no-underline'>Home</li></Link>
                    <Link href={"/shop"}><li className='underline underline-offset-8 hover:no-underline'>Shop</li></Link>
                    <Link href={"#about"}><li className='underline underline-offset-8 hover:no-underline'>About</li></Link>
                    <Link href={"/contact"}><li className='underline underline-offset-8 hover:no-underline'>Contact</li></Link>
                </ul>
            </div>

            <div className='flex gap-5 mt-8 '>

            <Link href={"/my-account"}><TbUserExclamation className='w-[25px] h-[20px]' /></Link>
            <Link href={"https://www.google.com/"} target='_blank'><CiSearch  className='w-[25px] h-[20px]' /></Link>
            <Link href={"https://www.facebook.com/profile.php?id=100051895934107"} target='_blank'><CiHeart  className='w-[25px] h-[20px]' /></Link>
            <Link href={"/cart"}><AiOutlineShoppingCart  className='w-[25px] h-[20px]' /></Link>
            <Link href={"/checkout"}><IoBagCheckOutline   className='w-[25px] h-[20px]' /></Link>

            </div>


        </div>
    </>
  )
}

