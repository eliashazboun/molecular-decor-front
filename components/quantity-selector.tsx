
"use client"
import { useState } from "react";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface QuantitySelectoreProps {
  startingValue:number;
  product: Product;
}

const QuantitySelector : React.FC<QuantitySelectoreProps> = ({
  startingValue,
  product

}) => {
    const [count, setCount] = useState(startingValue)
    const cart = useCart()

    const decrement = () => {
      if(count === 1) return
      setCount(prev => prev - 1)
      cart.removeItem(product.id)
    }
    const increment = () => {
      cart.addItem(product)
      setCount(prev => prev + 1)
    }
  return(
    <div className="flex w-fit border-y border-black">
      <Button className="rounded-none h-4 w-4 flex justify-center items-center" onClick={decrement}>-</Button>
      <p className="w-8 text-center">{count}</p>
      <Button className="rounded-none h-4 w-4 flex justify-center items-center" onClick={increment}>+</Button>

    </div>
  )
}

export default QuantitySelector;