"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { CountContext } from "./context";
import { Product } from "./types/Product";


const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState<Product[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const grandTotal = cart.map((item)=>item.subTotal).reduce((acc , currVal)=>acc + currVal , 0)
  useEffect(() => {
    const loadCart = () => {
      const storedCart = localStorage.getItem("rafayCart")
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
      setIsLoaded(true)
    }

    loadCart()
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("rafayCart", JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 , subTotal:(item.quantity+1)*item.price} : item))
      }
      return [...prevCart, { ...product, quantity: quantity , subTotal:quantity*product.price}]
    })
  }
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item:Product) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <div>
      <CountContext.Provider value={{removeFromCart , clearCart , addToCart , cart , setCart , quantity , setQuantity , grandTotal }}>
        {children}
      </CountContext.Provider>
    </div>
  );
};

export default CountProvider;
