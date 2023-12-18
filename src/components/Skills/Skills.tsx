"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SKILLS_CATEGORIES } from "../../constants/skills.const";

export interface SkillsProps {}

export const Skills = (props: SkillsProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <section
      ref={targetRef}
      className="h-[200vh] rounded-tl-[6rem] relative bg-white w-screen bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500"
    >
      <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">
        <h1 className="absolute top-16 left-24 text-7xl font-bold text-white drop-shadow-lg z-90">
          Skills
        </h1>
        {/* <BubbleChart data={SKILLS} /> */}
        <motion.div
          style={{ x }}
          // className={`[&>*:nth-child()]:flex-col-reverse grid grid-cols-${
          //   Object.values(SKILLS).length
          // }}`}
          className="flex gap-8"
        >
          {Object.values(SKILLS_CATEGORIES).map((category) => (
            <div
              key={category.name}
              className={`justify-center items-center rounded-md py-8 relative`}
            >
              <h1 className="text-xl bg-white border-[1px] border-black text-black b rounded-md w-fit px-4 py-2 absolute top-4 -left-4">
                {category.name}
              </h1>
              <div className="grid grid-rows-2 p-4 gap-4 grid-flow-col rounded-md bg-slate-500">
                {category.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col gap-4 text-center text-md drop-shadow-lg font-medium min-h-[13rem] w-[13rem] justify-center items-center rounded-md"
                  >
                    <h3 className="text-3xl max-w-[10rem]">{skill.label}</h3>
                    <Image
                      className="w-20 h-20"
                      src={skill.logo ?? ""}
                      alt={skill.label}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
