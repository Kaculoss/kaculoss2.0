"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { logo } from "@/assets";
import { navLinks } from "@/constants";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SquareMenu } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const handleSmallClick = (link: string) => {
    setActive(link);
    setToggle(!toggle);
  };
  return (
    <nav
      className={`sm:px-16 px-6 w-full bg-background flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleClick}
        >
          <Image src={logo} alt="logo" className="w-52 h-20 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-primary" : "text-primary/50"
              } hover:text-primary text-[18px] font-gugi font-medium cursor-pointer `}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Popover>
            <PopoverTrigger asChild>
              <SquareMenu size={30} />
            </PopoverTrigger>
            <PopoverContent className="w-40 mr-4">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => handleSmallClick(link.title)}
                    className={`${
                      active === link.title ? "text-primary" : "text-primary/50"
                    } font-gugi font-medium cursor-pointer text-[16px]`}
                  >
                    <Link href={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
