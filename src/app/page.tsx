"use client";

import { Skills } from "@/components/Skills";
import { Hero } from "../components/Hero";
import "./page.css";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center text-white gap-4 box-border w-full background-animate">
      <Hero />
      <Skills />
    </div>
  );
}
