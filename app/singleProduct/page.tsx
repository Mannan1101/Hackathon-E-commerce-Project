import Navbar from '@/components/Prebuild/navbar'
import DescriptionAndReview from '@/components/singleProduct/DescriptionAndReview'
import ProductDescription from '@/components/singleProduct/ProductDescription'
import RelatedProduct from '@/components/singleProduct/RelatedProduct'
import React from 'react'

export default function Page() {
  return (
    <>
        <div>
            <Navbar bgColor='bg-[white]' /> <br /><br /><br />
            <ProductDescription/> <br />
            <DescriptionAndReview/><br />
            <RelatedProduct/>
        </div>
    </>
  )
}
