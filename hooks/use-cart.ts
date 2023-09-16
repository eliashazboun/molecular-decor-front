import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAllItem: (id:string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  items: [],
  addItem: (data: Product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      toast.success('Item added to cart.');
      const updated = currentItems.map((item) => {
        if(item.id === existingItem.id){
          item.quantity += 1
          return item
        }else{return item}
      })

      return set({items: updated})
    }
    data.quantity = 1

    set({ items: [...get().items, data] });
    toast.success('Item added to cart.');
  },
  removeItem: (id: string) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === id);

    if(existingItem?.quantity && existingItem.quantity > 1){
      const updated = currentItems.map((item) => {
        if(item.id === existingItem.id){
          item.quantity -= 1
          return item
        }else{
          return item
        }
      })
      toast.success('Item removed from cart.');
      return set({items:updated})
    }else{
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');

    }


    
  },
  removeAllItem: (id:string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast.success('Item removed from cart.');

  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;