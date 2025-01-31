"use client";
import Navbar from "./Navbar";
import { CountContext } from "@/app/context";
import React from "react";
import { useContext  } from "react";
import Link from "next/link";
import Image from "next/image";


const CartManager = () => {
  const obj = useContext(CountContext);
 

  return (
    <>
      <Navbar />
      <div className="h-[316px] shop-bg flex flex-col items-center justify-center">
        <div>
         <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
        </div>
        <div className="text-[48px] font-medium">Cart</div>
        <div className="flex items-center gap-3">
          <span>Home</span>
          <span>
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
          </span>
          <span>Cart</span>
        </div>
      </div>
      <div className="min-h-[525px] flex items-center justify-center">
        <div className=" max-w-[1240px] min-h-[390px] flex gap-5 flex-wrap items-center justify-center">
          <div className="left lg:w-[817px] w-[300px] sm:w-[500px]">
            <table className="w-full">
              <thead className="bg-[#FFF9E5] h-[55px]">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              </thead>
              <tbody className="h-[106px]">
              {obj.cart.map((item , index)=>{
            return(<>
               <tr key={index}>
                <td className="flex items-center gap-2 mb-4"><Image src={item.imagePath} alt="image" width={106} height={106} className="sm:block hidden"></Image>{item.name}</td>
                <td >{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.subTotal}</td>
              </tr>
              </>)
          })}
          </tbody>
            </table>
          </div>

          <div className="right md:w-[393px] w-[300px] h-[390px] bg-[#FFF9E5] flex flex-col justify-center items-center gap-9">
            <div className="text-[32px] font-semibold">Cart Totals</div>
            <div className="flex gap-3">
              <div>Subtotal</div>
              <div className="text-[#9F9F9F]">Rs{obj.grandTotal}</div>
            </div>
            <div className="flex gap-3">
              <div>Total</div>
              <div className="text-[20px] text-[#B88E2F] font-medium">
                Rs{obj.grandTotal}
              </div>
            </div>
          <Link href={'/checkout'}>  <button className="w-[222px] h-[59px] rounded-[15px] border">
              Check Out
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartManager;
