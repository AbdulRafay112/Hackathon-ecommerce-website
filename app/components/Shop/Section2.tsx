import React from 'react'

const Section2 = () => {
  return (
    <>
    <div className='min-h-[300px] bg-[#FAF4F4] mt-10 flex flex-wrap items-center justify-center gap-5'>
        <div className='flex flex-col justify-center gap-2  max-w-[376px] h-[108px] px-4'>
            <div className='font-medium text-[32px]'>Free Delivery</div>
            <div className='text-[20px]'>For all oders over $50, consectetur adipim scing elit.</div>
        </div>
        <div className='flex flex-col justify-center gap-2  max-w-[376px] h-[108px] px-4'>
            <div className='font-medium text-[32px]'>90 Days Return</div>
            <div className='text-[20px]'>If goods have problems, consectetur adipim scing elit.</div>
        </div>
        <div className='flex flex-col justify-center gap-2 max-w-[376px] h-[108px] px-4'>
            <div className='font-medium text-[32px]'>Secure Payment</div>
            <div className='text-[20px]'>100% secure payment, consectetur adipim scing elit.</div>
        </div>
    </div>
    </>
  )
}

export default Section2
