"use client";

import { Category, Product } from "@/types";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface CategoryCard {
  data: Category;
}
const CategoryCard: React.FC<CategoryCard> = ({ data }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/category/${data?.id}`)
  }


  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div>
        {data.name}
      </div>
      
    </div>
  );
};

export default CategoryCard;
