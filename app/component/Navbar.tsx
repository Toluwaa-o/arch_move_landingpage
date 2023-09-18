"use client";

import type { FC } from "react";
import NavList from "./NavList";
import Image from "next/image";
import { Inter, Playfair } from "next/font/google";
import Bar from "./Bar";
import { useState } from "react";

interface navbarProps {}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });

const Navbar: FC<navbarProps> = ({}) => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Image
        src={"/img/logo-arch.png"}
        alt="logo"
        width={90}
        height={90}
        className="md:hidden"
      />
      <Image
        src={"/img/logo-arch.png"}
        alt="logo"
        width={70}
        height={70}
        className="hidden md:block"
      />
      <nav className={`hidden md:block ${inter.variable} font-sans`}>
        <NavList />
      </nav>

      <span className="ml-auto bg-gray-300 p-1 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setDisplay(true)}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 8h16M4 16h16"
        />
      </svg>

      {display && <Bar clickhandler={() => setDisplay(false)} />}
    </>
  );
};
export default Navbar;
