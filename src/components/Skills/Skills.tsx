"use client";
import { SKILLS } from "@/constants/skills.const";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export interface SkillsProps {}

export const Skills = (props: SkillsProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section
      ref={targetRef}
      className="h-[200vh] rounded-tl-[6rem] relative bg-white w-screen bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500"
    >
      <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">
        <h1 className="absolute top-24 text-7xl font-bold text-white drop-shadow-lg">
          Skills
        </h1>
        {/* {<BubbleChart data={SKILLS} />} */}
        <motion.div
          style={{ x }}
          className="[&>*:nth-child()]:flex-col-reverse grid grid-rows-3 grid-flow-col"
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col gap-4 px-2 text-center py-1 mr-2 mb-2 text-md drop-shadow-lg font-medium h-[15rem] w-[15rem] justify-center items-center  rounded-md"
            >
              <h3 className="text-3xl">{skill.label}</h3>
              <Image
                className="w-20 h-20"
                src={skill.logo ?? ""}
                alt={skill.label}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
