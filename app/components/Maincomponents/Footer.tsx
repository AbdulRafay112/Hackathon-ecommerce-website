import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='max-h-[850px] flex items-center'>
        <div className='max-w-[1240px] mx-auto max-h-[700px]'>
            <div className='flex gap-8 grid-cols-2 flex-wrap items-center justify-center'>
                <div className='max-w-[285px] mt-20'>
                    <li className='list-none text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,</li>
                    <li className='list-none text-[#9F9F9F]'>FL 33134 USA</li>
                </div>
                <div className='flex flex-col gap-9'>
                    <li className='text-[#9F9F9F] list-none'>Links</li>
                    <li className='list-none'>Home</li>
                    <li className='list-none'>Shop</li>
                    <li className='list-none'>About</li>
                    <li className='list-none'>Contact</li>
                </div>
                <div className='flex flex-col gap-9'>
                    <li className='text-[#9F9F9F] list-none'>Help</li>
                    <li className=' list-none'>Payment Options</li>
                    <li className=' list-none'>Returns</li>
                    <li className=' list-none'>Privacy Policies</li>
                </div>
                <div className='flex flex-col gap-9'>
                    <li className='text-[#9F9F9F] list-none'>Newsletter</li>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[200px]'>
                        <input type="text" placeholder='Enter your Email Address' className='text-[#9F9F9F]' />
                        <hr className='border'/>
                        </div>
                        <div className='w-[75px]'>
                            <button className='font-bold'>Subscribe</button>
                            <hr className='border' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border mt-6'/>
            <div className='mt-6 lg:text-start text-center'>2022 Meubel House. All rights reverved</div>
        </div>
    </footer>
    </>
  )
}

export default Footer
