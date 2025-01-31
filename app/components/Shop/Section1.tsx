import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='h-[316px] shop-bg flex flex-col items-center justify-center'>
        <div><Image src={'/logo.png'} alt='image' width={100} height={100}></Image></div>
        <div className='text-[48px] font-medium'>Shop</div>
        <div className='flex items-center gap-3'>
            <span>Home</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></span>
            <span>Shop</span>
        </div>
      
    </div>
  )
}

export default Section1
