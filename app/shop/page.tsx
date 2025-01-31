import React from 'react'
import Section1 from '../components/Shop/Section1'
import Navbar from '../components/Maincomponents/Navbar'
import Pagination from '../components/Shop/Pagination'
import Section2 from '../components/Shop/Section2'


const page = () => {
  return (
    <>
    <Navbar/>
    <Section1/>
    <Pagination/>
    <Section2/>

    </>
  )
}

export default page
