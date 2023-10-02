"use client";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
const NavbarActions = () => {
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
        className="flex items-center justify-center rounded-full py-2 px-4"
        onClick={() => {
          router.push(`/cart`);
        }}
      >
        <ShoppingBag className="text-white" size={20} />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};
export default NavbarActions;
