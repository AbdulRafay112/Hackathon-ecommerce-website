"use client"
import React from 'react'

const Nextbutton = ({offset , handlePageChange , limit , total}:{offset:number , handlePageChange:(pageIndex:number)=>void ,limit:number , total:number}) => {
   // limit = 16;
   // offset = 0 , 16 , 32
    const handleNext = ()=>{
        handlePageChange(Math.floor(offset/limit)+1)
    }
    const isNextPageAvailable = Math.floor(offset / limit) < Math.ceil(total / limit) - 1
  return (
    <div>
        { isNextPageAvailable &&<button className='bg-[#FFF9E5] w-[98px] h-[60px] rounded-[10px]' onClick={handleNext}>Next</button>}
    </div>
  )
}

export default Nextbutton
