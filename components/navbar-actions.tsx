"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import MobileMainNav from "./mobile-main-nav";
import { Category } from "@/types";
export const revalidate = 0;


interface NavbarActionsProps{
  data: Category[];

}

const NavbarActions:React.FC<NavbarActionsProps> = ({data}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.reduce((total, item) => (total += item.quantity), 0)}
        </span>
      </Button>
      <MobileMainNav data={data}/>

      
    </div>
  );
};

export default NavbarActions;
