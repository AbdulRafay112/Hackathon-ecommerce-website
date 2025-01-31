import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Section4 = () => {
  return (
    <>
    <div className='max-h-[1000px] bg-[#FFF9E5] flex flex-wrap md:gap-8 gap-0 justify-center'>
        <div><Image src="/sofa.png" width={550} height={600} alt="image" className='w-[550px] h-[600px]'></Image></div>
        <div className='flex flex-col gap-3 justify-center max-w-[331px]'>
            <div className='font-medium text-[24px]'>New Arrivals</div>
            <div className='font-bold md:text-[48px] text-[40px]'>Asgaard sofa</div>
            <Link href={'/shop'}><div className='border max-w-[255px] h-[64px] flex items-center justify-center cursor-pointer'><button className='text-[20px]'>Order Now</button></div></Link>
        </div>
    </div>
    </>
  )
}

export default Section4
