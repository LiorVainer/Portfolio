import { motion } from "framer-motion";
import { PROFILE } from "../../constants/profile.const";
import classes from "./hero.module.scss";

export interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const first = PROFILE.FIRST.split(" ");
  const second = PROFILE.SECOND.split(" ");

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
        <p className="text-5xl font-medium">
          {first.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 20,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <p className="text-5xl font-medium text-white">
          {second.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 3 + i / 20,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <div className="flex items-center w-full justify-center">
          <div className={classes.mouse}></div>
        </div>
      </article>
    </div>
  );
};
