"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast/headless";
import { Loader2 } from "lucide-react";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("success")) {
      removeAll();
      toast.success("Payment Completed!");
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  const onCheckout = async () => {
    try {

      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          //   //* Testing
          productsOrdered: items.map((item) => ({
            itemId: item.id,
            itemQuantity: item.quantity,
          })),
        }
      );

      window.location = response.data.url;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={loading || items.length === 0}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        {loading ? (
          <div className="flex justify-center items-center gap-2">
            <Loader2 className=" h-4 w-4 animate-spin" />
            Loading
          </div>
        ) : (
          "Checkout"
        )}
      </Button>
    </div>
  );
};

export default Summary;
