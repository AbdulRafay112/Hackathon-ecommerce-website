import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Section2 = () => {
  return (
    <>
    <div className='h-[672px] bg-[#FAF4F4] px-8 py-4 flex lg:flex-row flex-col justify-center gap-5 items-center'>
        <div className='box-1 lg:w-[605px] max-w-[400px] h-[562px] flex flex-col gap-3 px-3'>
            <div><Image src='/table-1.png' alt="image" width={400} height={400} className='lg:h-[400px] h-[200px]'></Image></div>
            <div className='text-[36px] font-medium'>Side table</div>
            <div className='max-w-[100px]'>
            <Link href={'/shop'}><button>View More</button></Link>
            <hr className='border'/>
            </div>
        </div>
        <div className='box-1 lg:w-[605px] max-w-[400px] h-[562px] flex flex-col gap-3 px-3 '>
            <div><Image src='/table-2.png' width={400} height={400} alt="image" className='lg:h-[400px] h-[200px]'></Image></div>
            <div className='text-[36px] font-medium'>Comfort Sofa</div>
            <div className='max-w-[100px]'>
            <Link href={'/shop'}><button>View More</button></Link>
            <hr className='border'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section2
