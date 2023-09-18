"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Size, Type } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState, Fragment } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes?: Size[];
  types?: Type[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, types }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center justify-center gap-x-2 lg:hidden "
        disabled={open}
      >
        Filters
        <Plus size={20} />
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
                <div className="p-4">
                  {sizes && <Filter valueKey="sizeId" name="Sizes" data={sizes} />}
                  {types && <Filter valueKey="typeId" name="Molecule Type" data={types}  />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileFilters;
