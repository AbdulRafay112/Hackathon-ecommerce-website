"use client";
import { Product } from "./types/Product";
import { createContext , Dispatch, SetStateAction } from "react";
type SetCartType = Dispatch<SetStateAction<Product[]>>;
type SetQuantityType = Dispatch<SetStateAction<number>>;
interface Count {
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  addToCart: (product: Product) => void;
  cart:Product[];
  setCart:SetCartType;
  quantity:number;
  setQuantity:SetQuantityType;
  grandTotal:number;
}
export const CountContext = createContext({} as Count);
