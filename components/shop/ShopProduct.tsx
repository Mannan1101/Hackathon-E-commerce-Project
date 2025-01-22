'use client'; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import { ShopProductCard } from '../Prebuild/cards';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Fetch data from Sanity
async function getdata() {
    const fetchdata = await client.fetch(`*[_type == "product"]{
        name,
        price,
        "imageUrl": image.asset->url
    }`);
    return fetchdata;
}

// ShopProduct Component
export default function ShopProduct() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getdata().then((fetchedData) => {
            console.log('Fetched Data:', fetchedData); // Debugging output
            setData(fetchedData);
        });
    }, []);

    return (
        <>
            {/* Dynamic Product List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
                {data.map((val, index) => {
                    // Ensure image URL is fully qualified with the base Sanity CDN URL
                    const imageUrl = val.imageUrl
                        ? `https://cdn.sanity.io/images/your_project_id/your_dataset/${val.imageUrl}` // Update with your Sanity Project ID and Dataset
                        : '/placeholder.jpg'; // Fallback placeholder if no image

                    return (
                        <ShopProductCard
                            key={index}
                            image={imageUrl}
                            head={val.name || 'Unknown Product'}
                        />
                    );
                })}
            </div>

            {/* Static Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
                <ShopProductCard image="/placeholder.jpg" head="Trenton modular sofa_3" />
                <ShopProductCard image="/placeholder.jpg" head="Granite and table dining chair" />
                <ShopProductCard image="/placeholder.jpg" head="Outdoor table and stool" />
                <ShopProductCard image="/placeholder.jpg" head="Plain console teak mirror" />
                {/* Add other static cards */}
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4 mb-16">
                <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px]">1</button>
                <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px]">2</button>
                <button className="w-[60px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px]">3</button>
                <button className="w-[65px] h-[60px] bg-[#FFF9E5] hover:bg-[#FBEBB5] rounded-[5px]">Next</button>
            </div>

            {/* Info Section */}
            <div className="w-full h-full flex flex-col justify-between items-center p-5 gap-5 lg:flex-row bg-[#FAF4F4] mb-24">
                <div className="mt-10 mb-10">
                    <h1 className="text-[32px]">Free Delivery</h1>
                    <p className="text-[#9F9F9F]">For all orders over $50.</p>
                </div>
                <div className="mt-10 mb-10">
                    <h1 className="text-[32px]">90 Days Return</h1>
                    <p className="text-[#9F9F9F]">If goods have problems.</p>
                </div>
                <div className="mt-10 mb-10">
                    <h1 className="text-[32px]">Secure Payment</h1>
                    <p className="text-[#9F9F9F]">100% secure payment.</p>
                </div>
            </div>
        </>
    );
}
