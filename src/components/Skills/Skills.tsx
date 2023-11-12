"use client";
import { SKILLS } from "@/constants/skills.const";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface SkillsProps {}

export const Skills = (props: SkillsProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["32%", "-32%"]);

  return (
    <section
      ref={targetRef}
      className="h-[200vh] relative bg-white w-screen p-4 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300"
    >
      <div className="sticky top-0 h-screen flex justify-center items-center  overflow-hidden">
        <h1 className="absolute top-32 text-8xl font-bold text-white drop-shadow-lg">
          Skills
        </h1>
        <motion.div style={{ x }} className="flex gap-4">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-2 text-center py-1 mr-2 mb-2 text-md font-medium h-[10rem] w-[10rem] flex justify-center items-center text- bg-black rounded-md"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
