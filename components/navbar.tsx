import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileMainNav from "./mobile-main-nav";

const Navbar = async () => {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src={'/logo.png'}
              alt="logo"
              height={100}
              width={100}
            />
          </Link>
          <MainNav data={categories}/>

          <NavbarActions data={categories}/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;