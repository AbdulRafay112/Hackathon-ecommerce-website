import React from 'react'
import {FaStar , FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

const Star = () => {
    const stars = 5;
    const ratingStar = Array.from({length:5} , (elem , index)=>{
        const number = index + 0.5;
        return(
            <span key={index}>
                {
                    stars >= index + 1?<FaStar className='text-yellow-500'/>:
                    stars >= number?<FaStarHalfAlt className='text-yellow-500'/>:
                    <AiOutlineStar className='text-yellow-500'/>
                }
            </span>
        )

    })
  return (
    <div className='flex items-center gap-3'>
      {ratingStar}
    </div>
  )
}

export default Star
