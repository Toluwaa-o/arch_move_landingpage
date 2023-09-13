"use client";

import type { FC } from "react";
import NavList from "./NavList";
import Link from "next/link";

interface BarProps {
  clickhandler: any;
}

const Bar: FC<BarProps> = ({ clickhandler }) => {
  return (
    <nav className="absolute top-0 right-0 bg-[#FD665E] py-8 px-10 text-lg font-semibold rounded-bl-xl md:hidden flex flex-col gap-6 items-start w-[60vw] h-[100%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="ml-auto"
        onClick={clickhandler}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M18 6L6 18M6 6l12 12"
        />
      </svg>
      <NavList />
      <Link
        href="#"
        className="bg-white text-center rounded text-[#FD665E] w-full"
      >
        Sign In
      </Link>
      <Link
        href="#"
        className="rounded text-center border-2 text-white border-white w-full"
      >
        Sign Up
      </Link>
    </nav>
  );
};
export default Bar;
