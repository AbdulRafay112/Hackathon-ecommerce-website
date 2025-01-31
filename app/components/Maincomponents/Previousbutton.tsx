"use client"
import React from 'react'

const Previousbutton = ({offset , handlePageChange , limit }:{offset:number , handlePageChange:(pageIndex:number)=>void ,limit:number ,}) => {
   // limit = 16;
   // offset = 0 , 16 , 32
    const handlePrevious = ()=>{
        handlePageChange(Math.floor(offset/limit)-1)
    }
    const isPreviousPageAvailable = Math.floor(offset/limit)>0;
  return (
    <div>
        { isPreviousPageAvailable &&<button className='bg-[#FFF9E5] w-[98px] h-[60px] rounded-[10px]' onClick={handlePrevious}>Previous</button>}
    </div>
  )
}

export default Previousbutton
