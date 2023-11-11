import { SKILLS } from "@/constants/skills.const";

export interface SkillsProps {}

export const Skills = (props: SkillsProps) => {
  return (
    <div className="h-[300vh] bg-white w-screen p-4 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-300">
      {SKILLS.map((skill) => (
        <span
          key={skill}
          className="inline-block px-2 py-1 mr-2 mb-2 text-sm font-medium text-black bg-gray-200 rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};
