"use client";
import React, { Fragment, useState } from "react";
import Button from "./ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import IconButton from "./ui/icon-button";
import { usePathname } from "next/navigation";
import { Category } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
export const revalidate = 0;

interface MobileMainNavProps {
  data: Category[];
}

const MobileMainNav: React.FC<MobileMainNavProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const router = useRouter()
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        className="ml-auto flex items-center p-2 lg:hidden md:hidden "
      >
        <Menu size={20} className="p-0" />
      </Button>
      <Transition show={open} as={Fragment}>
        <Dialog open={open} as="div" onClose={onClose}>
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease duration-200 transform"
              enterFrom="opacity-0 translate-x-12"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-12"
            >
              <Dialog.Panel
                className={
                  "relative ml-auto flex h-full w-[60%] max-w-xs flex-col overflow-y-auto bg-white  py-4 pb-6 shadow-xl"
                }
              >
                <div className="flex items-center justify-end px-4">
                  <IconButton icon={<X size={15} />} onClick={onClose} />
                </div>
                <h1 className="text-center text-green-500 font-bold text-2xl">Categories</h1>
                <nav className=" flex flex-col justify-start align gap-3 mt-5 items-center">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={onClose}
                      className={cn(
                        "text-lg font-medium transition-colors  hover:text-black",
                        route.active ? "text-black text-xl underline" : "text-neutral-500"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))} 
                  <Button onClick={() => {router.push('/cart'); onClose()}} className="mt-10 flex justify-center mx-5 gap-2">
                    <ShoppingBag/>
                    View Cart
                  </Button>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMainNav;
