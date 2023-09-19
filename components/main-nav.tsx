"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const revalidate = 0;

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6  items-center space-x-4 hidden md:flex lg:flex lg:space-x-6">
      
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-md font-medium transition-colors hover:text-black",
            route.active ? "text-black text-xl underline" : "text-neutral-500"
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
