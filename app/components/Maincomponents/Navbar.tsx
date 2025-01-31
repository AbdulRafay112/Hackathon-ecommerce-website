"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleBurger = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open)
  }
  

  return (
    <>
      <nav className="h-[100px] flex items-center justify-between md:px-20 px-5">
        <div className="center mx-auto">
          <ul className="flex items-center justify-center lg:gap-8 gap-4">
            <Link href={"/"} className="font-bold">
              <li>Home</li>
            </Link>
            <Link href={"/shop"} className="font-bold">
              <li>Shop</li>
            </Link>
            <Link href={"/about"} className="font-bold">
              <li>About</li>
            </Link>
            <Link href={"/contact"} className="font-bold">
              <li>Contact</li>
            </Link>
            <div className="relative">
                <div className="md:hidden block" onClick={handleBurger} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </div>
              {open && <> <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none md:hidden ">  
            <div className="text-2xl text-end mr-3" onClick={handleClose}>X</div>
          <ul className="flex flex-col items-center gap-4">  
            <li>  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            </li>  
            <li>  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            </li>  
            <li>  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>  
            </li>  
            <li><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 6H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="6"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="17"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 20L15 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg></li>
          </ul>  
        </div></>  }
            </div>
          </ul>
        </div>
        <div className="right flex items-center justify-center gap-7 ">
          <div className="profile cursor-pointer md:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="search cursor-pointer md:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="heart cursor-pointer md:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Link href={'/cart'}><div className="addtocart cursor-pointer md:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 6H22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="6"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="17"
                cy="20"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 20L15 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
