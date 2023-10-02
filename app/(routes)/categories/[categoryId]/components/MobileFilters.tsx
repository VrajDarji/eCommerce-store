"use client";

import Button from "@/components/ui/Button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import IconButton from "@/components/ui/IconButton";
import { X } from "lucide-react";
import Filter from "./Filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}
const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button
        className="flex items-center py-2 px-4  lg:hidden"
        onClick={onOpen}
      >
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} className="" />
            </div>

            <div className="p-4">
              <Filter value="sizeId" name="Sizes" data={sizes} />
              <Filter value="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
