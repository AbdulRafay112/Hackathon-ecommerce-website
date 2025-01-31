import React from 'react'
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Section4 from './Home/Section4'
import Section5 from './Home/Section5'


const Homepage = () => {
  return (
    <>
    <div className='bg-[#FBEBB5]'>
    <Section1/>
    </div>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    </>
  )
}

export default Homepage
