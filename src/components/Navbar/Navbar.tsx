"use client";

import Image from "next/image";
import Link from "next/link";
import GithubSvg from "../../../public/github.svg";
import LinkedInSvg from "../../../public/linkedin.svg";

export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 h-16 flex items-center justify-center">
      <div className="bg-white w-1/2 shadow-md flex items-center justify-between h-full px-6 rounded-b-md">
        <div className="flex justify-center items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://github.com/LiorVainer">
            <Image className="w-8 h-8" src={LinkedInSvg} alt="LinkedIn" />
          </Link>
          <Link href="https://github.com/LiorVainer">
            <Image className="w-8 h-8" src={GithubSvg} alt="Github" />
          </Link>
        </div>
      </div>
    </header>
  );
};
