import { motion } from "framer-motion";
import { PROFILE } from "../../constants/profile.const";
import classes from "./hero.module.scss";

export interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const first = PROFILE.FIRST.split(" ").map((word) => word.split(""));

  const second = PROFILE.SECOND.split(" ").map((word) => word.split(""));

  console.log(first);

  return (
    <div className="h-screen p-52 flex flex-col justify-center items-start gap-16">
      <header className="flex-col items-start justify-center gap-4">
        <h1 className="text-8xl font-bold drop-shadow-lg text-white">
          Lior Vainer
        </h1>
        <h4 className="text-6xl font-normal text-zinc-300">
          Full Stack Developer
        </h4>
      </header>

      <article className="flex flex-col gap-16">
        <p className="text-5xl font-medium flex flex-wrap gap-4">
          {first.map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.map((ch, chIndex) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: wordIndex / 3 + chIndex / 40,
                  }}
                  key={chIndex}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </p>
        <p className="text-5xl text-white flex flex-wrap gap-4">
          {second.map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.map((ch, chIndex) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: wordIndex / 3 + chIndex / 40 + 8,
                  }}
                  key={chIndex}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </p>
        <div className="flex items-center w-full justify-center">
          <div className={classes.mouse}></div>
        </div>
      </article>
    </div>
  );
};
