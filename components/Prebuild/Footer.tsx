import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='grid lg:flex justify-between p-5 font-bold'>

                <div className='text-[#9F9F9F] flex flex-col justify-center '>
                    <h1>400 University Drive Suite 200 <br /> Coral Gables,</h1>
                    <p>FL 33134 USA</p>
                </div>

                <div className='grid gap-5 mt-10 md:mt-0'>
                    <h1 className='text-[#9F9F9F]'>Links</h1>
                    <ul className='grid gap-10'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Aboout</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='grid gap-5 mt-10 md:mt-0'>
                    <h1 className='text-[#9F9F9F]'>Help</h1>
                    <ul className='grid gap-10'>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>

                <div className='grid gap-4 mt-10 md:mt-0'>
                    <h1 className='text-[#9F9F9F]'>Newsletter</h1>
                    <div className='flex flex-col md:flex-row gap-5 items-center'>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email Address' className='border-b-[1px] border-b-black pb-3' />
                        <h1 className='underline underline-offset-8 hover:no-underline'>SUBSCRIBE</h1>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-5 border-t-2 pt-5 text-center'>
                <h1>&copy; All right reserved 2024 @Abdul Rafay Khan</h1>
            </div>
        </>
    )
}
