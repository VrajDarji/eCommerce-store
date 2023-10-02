"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const path = usePathname();
  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: path === `/categories/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((e) => {
        return (
          <Link
            href={e.href}
            key={e.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              e.active ? "text-black" : "text-neutral-500"
            )}
          >
            {e.label}
          </Link>
        );
      })}
    </nav>
  );
};
export default MainNav;
