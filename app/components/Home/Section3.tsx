import React from 'react'
import { getNewArrivalData } from '@/app/functions/newArrvialData'
import { Product } from '@/app/types/Product'
import Link from 'next/link'
import Image from 'next/image'

const Section3 = async() => {
    const data = await getNewArrivalData()
  return (
    <>
    <div className='md:h-[777px] max-h-[1200px] mt-6 flex flex-col gap-9 justify-center items-center'>
        <div className='md:text-[36px] text-[25px] font-medium text-center'>Top Picks For You</div>
        <div className='font-medium text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
        <div className='flex gap-4 flex-wrap max-w-[80%] mx-auto justify-center items-center'>
            {data.map((product:Product , index:number)=>{
                return(<><div key={index} className='flex flex-col items-center justify-center gap-3 cursor-pointer'>
                    <div><Image src={product.imagePath} alt="image" width={200} height={200} className='md:w-[200px] md:h-[200px] w-[150px] h-[150px]'></Image></div>
                    <div>{product.name}</div>
                    <div>Rs.{product.price}</div>
                    </div></>)

            })}
        </div>
        <div className='max-w-[115px] mx-auto'>
            <Link href={'/shop'}><button className='text-[20px] font-medium'>View More</button></Link>
            <hr className='border mt-3'/>
        </div>
    </div>
    </>
  )
}

export default Section3
