"use client"
import React from 'react'
import { useState, useEffect , useContext } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/app/types/Product";
import Navbar from "@/app/components/Maincomponents/Navbar";
import Star from "@/app/components/Maincomponents/Star";
import Link from 'next/link';
import Image from 'next/image';
import { CountContext } from '@/app/context';
const SingleProduct = ({product}:{product:string}) => {
  const obj = useContext(CountContext)
      const handleIncrement = () => {
        obj.setQuantity(obj.quantity + 1);
      };
      const handleDecrement = () => {
        if (obj.quantity > 1) obj.setQuantity(obj.quantity - 1);
      };
      const [products, setProducts] = useState([]);
      const productName = product;
      // fetching for products
      const singleProduct = products.find(
        (product: Product) => product.name === productName
      )|| {} as Product ;
      // fetching all products data;
      useEffect(() => {
        const fetchData = async () => {
          const a = await client.fetch(`*[_type == 'product']`);
          setProducts(a);
        };
        fetchData();
      }, []);
  return (
    <>
     <Navbar />
      <div className="h-[100px] mt-[14px] flex items-center lg:px-[99px] px-0 gap-4 lg:text-start text-center">
        <div>Home</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>Shop</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#000000"}
            fill={"none"}
          >
            <path
              d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-2xl">|</div>
        <div className="font-bold">{productName}</div>
      </div>

      {!singleProduct && (
        <div className="text-red-800 text-center text-2xl">
          product not found
        </div>
      )}
      {singleProduct && (
        <>
          <div className="min-h-[820px] flex items-center">
            <div className="w-[1241px] mx-auto min-h-[730px] flex lg:justify-between justify-center flex-wrap ">
              <div className="left max-w-[553px] min-h-[500px] flex gap-2 lg:gap-8 ">
                <div className="left-image w-[76px] h-[416px] flex flex-col gap-10">
                  <div className="box-1 h-[80px] bg-[#FFF9E5] flex items-center justify-center">
                    <Image  src={singleProduct.imagePath}
                      alt="image"
                      width={100}
                      height={80}></Image>
                  </div>
                  <div className="box-2 h-[80px] bg-[#FFF9E5] flex items-center justify-center">
                   <Image  src={singleProduct.imagePath}
                      alt="image"
                      width={100}
                      height={80}></Image>
                  </div>
                  <div className="box-3 h-[80px] bg-[#FFF9E5] flex items-center justify-center">
                    <Image src={singleProduct.imagePath}
                      alt="image"
                      width={100}
                      height={80}></Image>
                  </div>
                  <div className="box-4 h-[80px] bg-[#FFF9E5] flex items-center justify-center">
                  <Image   src={singleProduct.imagePath}
                      alt="image"
                      width={100}
                      height={80}></Image>
                  </div>
                </div>
                <div className="right-image h-[500px] max-w-[423px] flex items-center rounded-[10px]">
                <Image  src={singleProduct.imagePath}
                    alt="image"
                    width={423}
                    height={500}
                    className="lg:h-[500px] h-[300px]"></Image>
                    
                </div>
              </div>
              <div className="right h-[730px] min-h-[606px]  flex flex-col gap-7">
                <div className="lg:text-[42px] text-[35px]">{singleProduct.name}</div>
                <div className="text-[24px] font-medium">
                  Rs.{singleProduct.price}
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <Star />
                  </div>
                  <div className="text-2xl">|</div>
                  <div>5 Customer Review</div>
                </div>
                <div className="max-w-[424px]">{singleProduct.description}</div>
                <div className="flex flex-col gap-1">
                  <div>Size</div>
                  <div className="flex gap-2">
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FAF4F4] hover:bg-[#FBEBB5]">
                      L
                    </button>
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FAF4F4] hover:bg-[#FBEBB5]">
                      XL
                    </button>
                    <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FAF4F4] hover:bg-[#FBEBB5]">
                      XS
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>Color</div>
                  <div className="flex items-center gap-3">
                    <div>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="30" height="30" rx="15" fill="#816DFA" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="30" height="30" rx="15" fill="black" />
                      </svg>
                    </div>
                    <div>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="30" height="30" rx="15" fill="#CDBA7B" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex w-[123px] h-[64px] items-center gap-6 border rounded-[10px] justify-center">
                    <button className="text-2xl" onClick={handleDecrement}>
                      -
                    </button>
                    <button className="text-lg">{obj.quantity}</button>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                 <Link href={'/cart'} > <button onClick={()=>obj.addToCart(singleProduct)} className="lg:w-[215px] w-[150px] h-[64px] rounded-[15px] border flex items-center justify-center">
                    Add to Cart
                  </button></Link>
                </div>
                <hr className="border" />
                <div className="flex flex-col gap-5">
                  <div className="flex gap-6">
                    <div>SKU:</div>
                    <div>SSOO1</div>
                  </div>
                  <div className="flex gap-6">
                    <div>Category:</div>
                    <div>{singleProduct.category}</div>
                  </div>
                  <div className="flex gap-6">
                    <div>Tags :</div>
                    <div>Sofa , Chair , Home , Shop</div>
                  </div>
                  <div className="flex gap-6">
                    <div>share :</div>
                    <div className="flex gap-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
                          <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
                          <path
                            d="M7 10V17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00801 7L6.99902 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          color={"#000000"}
                          fill={"none"}
                        >
                          <path
                            d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default SingleProduct
