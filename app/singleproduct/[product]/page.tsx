"use client";
import React from "react";
import SingleProduct from "@/app/components/Maincomponents/SingleProduct";
const page = ({ params }: { params: { product: string } }) => {
  const product = decodeURIComponent(params.product);
  return (
    <>
    <SingleProduct product = {product}/>

    </>
  );
};

export default page;
