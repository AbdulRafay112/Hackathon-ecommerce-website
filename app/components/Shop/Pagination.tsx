"use client";
import { useEffect, useState } from "react";
import React from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/app/types/Product";
import Nextbutton from "../Maincomponents/Nextbutton";
import Previousbutton from "../Maincomponents/Previousbutton";
import Filterui from "./Filterui";
import Link from "next/link";
import Image from "next/image";
import Options from "@/app/types/Options";


const Pagination = () => {
  // filter code 
  const [filterProducts, setFilterProducts] = useState<Product[]>([])
  const handleFilter = (options:Options)=>{
    const filteredProducts = products.filter((product:Product)=>{
      const categoryCheck = product.category === options.category;
      const priceCheck = (options.price.toString()==="low-to-high" && product.price<500) || (options.price.toString() === "high-to-low" && product.price>500)
      return categoryCheck && priceCheck;
    })
    setFilterProducts(filteredProducts)
  }
  
  
  // other function 
  const [products, setProducts] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const limit = 16
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
    const totalData = await client.fetch(`*[_type == 'product']`);
    setTotal(totalData.length)
      const a = await client.fetch(`*[_type == 'product'][${offSet}...${offSet+limit}]{
  id,
  name,
  imagePath,
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category
}`);
setProducts(a)
    };
    fetchData();
  },[offSet , limit]);
  // function for handle page change
  const handlePageChange = (pageIndex:number)=>{
    setOffSet(pageIndex * limit)
  }

  return (
    <>
    <Filterui handleFilter = {handleFilter} setFilterProducts= {setFilterProducts} filterProducts = {filterProducts} />
    { filterProducts.length!==0 &&<><div className="max-w-[1242px] mx-auto flex gap-5 flex-wrap justify-center">
        {filterProducts.map((product:Product , index:number)=>{
            return(<><Link href={`/singleproduct/${product.name}`}><div key={index} className="flex flex-col h-[372px] w-[287px] items-center justify-center cursor-pointer">
                <div><Image src={product.imagePath} alt="image" width={200} height={200}></Image></div>
                <div className="max-w-[200px] truncate">{product.name}</div>
                <div className="text-[24px] font-medium">Rs{product.price}</div>
                </div></Link></>)
        })}
      </div></>}
    { filterProducts.length===0 &&<div className="min-h-[1808px] max-w-[1242px] mx-auto flex gap-5 flex-wrap justify-center items-center">
        {products.map((product:Product , index:number)=>{
            return(<> <Link href={`/singleproduct/${product.name}`}><div key={index}className="flex flex-col h-[372px] w-[287px] items-center justify-center cursor-pointer ">
                <div><Image src={product.imagePath} alt="image" width={200} height={200}></Image></div>
                <div className="max-w-[200px] truncate">{product.name}</div>
                <div className="text-[24px] font-medium">Rs{product.price}</div>
                </div></Link></>)
        })}
      </div>}
      <div className="flex gap-5 justify-center">
        <Previousbutton offset = {offSet} handlePageChange={handlePageChange} limit={limit}/>
      {Array(Math.ceil(total / limit))  
          .fill(null)  
          .map((_, index) => (  
            <button key={index} onClick={() => handlePageChange(index)} className={`${index === Math.floor(offSet/limit)?'bg-[#FBEBB5]':'bg-[#FFF9E5]'} w-[60px] h-[60px] rounded-[10px] text-[20px]`}>  
              {index + 1}  
            </button>  
          ))} 
          <Nextbutton offset = {offSet} handlePageChange={handlePageChange} limit={limit} total={total} />
      </div>
    </>
  );
};

export default Pagination;
