'use client';

import React, { useState, useEffect } from 'react';
import { ShopProductCard } from '../Prebuild/cards';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image'; // Ensure urlFor is imported correctly

// Define TypeScript Interface
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    stocklevel: number;
    imageUrl: string;
    description: string;
    isFeaturedProduct: boolean;
}

// Define Sanity Product Type
interface SanityProduct {
    _id: string;
    name: string;
    price: number;
    category: string;
    stocklevel: number;
    description: string;
    isFeaturedProduct: boolean;
    image?: any;
}

// Fetch data from Sanity
async function getdata(): Promise<Product[]> {
    try {
        const fetchdata: SanityProduct[] = await client.fetch(`*[_type == "product"]{
            _id,
            name,
            price,
            category,
            stocklevel,
            description,
            isFeaturedProduct,
            image,
        }`);
        return fetchdata.map((product) => ({
            id: product._id,
            name: product.name,
            price: product.price,
            category: product.category,
            stocklevel: product.stocklevel,
            description: product.description,
            isFeaturedProduct: product.isFeaturedProduct,
            imageUrl: product.image ? urlFor(product.image).url() : '/placeholder.jpg',
        }));
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return [];
    }
}

// ShopProduct Component
export default function ShopProduct() {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await getdata();
                console.log('Fetched Data:', fetchedData); // Debugging output
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {/* Dynamic Product List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
                {data.map((val) => (
                    <ShopProductCard
                        key={val.id} // Use unique id
                        image={val.imageUrl}
                        head={val.name || 'Unknown Product'}
                    />
                ))}
            </div>

            {/* Static Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
                <ShopProductCard image="/placeholder.jpg" head="Trenton modular sofa_3" />
                <ShopProductCard image="/placeholder.jpg" head="Granite and table dining chair" />
                <ShopProductCard image="/placeholder.jpg" head="Outdoor table and stool" />
                <ShopProductCard image="/placeholder.jpg" head="Plain console teak mirror" />
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
