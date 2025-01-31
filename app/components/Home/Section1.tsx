import React from 'react'
import Navbar from '../Maincomponents/Navbar'
import Link from 'next/link'
import Image from 'next/image'
const Section1 = () => {
  return (
    <>
    <Navbar/>
    <div className='h-[900px] flex lg:flex-row flex-col-reverse lg:gap-10 gap-2 items-center justify-center '>
      <div className='lg:mt-[328px] mt-0 ml-0 lg:ml-[202px] max-w-[440px] h-[276px] lg:text-start text-center '>
        <div className='md:text-[64px] text-[50px] font-medium'>Rocket single seater</div>
        <Link href={'/shop'}>
        <div className='w-[121px] mx-auto lg:mx-0'>
        <button className='text-[24px] font-medium'>Shop Now</button>
        <hr className='border'/>
        </div>
        </Link>
      </div>
      <div className='flex items-center'><Image src="/sofa-home.png" alt="image" width={900} height={500} className="transform scale-x-[-1] lg:w-[900px] w-[500px]" ></Image></div>
    </div>
    </>
  )
}

export default Section1
