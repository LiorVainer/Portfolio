export interface HeroProps {}

export const Hero = (props: HeroProps) => {
  return (
    <div className="h-screen p-52 flex flex-col justify-center items-start gap-16">
      <header className="flex-col items-start justify-center gap-4">
        <h1 className="text-8xl font-bold drop-shadow-lg text-white">
          Lior Vainer
        </h1>
        <h4 className="text-6xl font-normal text-white">
          Full Stack Developer
        </h4>
      </header>

      <article className="flex flex-col gap-16">
        <p className="text-5xl font-medium text-white">
          I'm an experienced software engineer, specializing in full-stack
          development. I'm passionate about UI/UX design and stay up-to-date
          with the latest tech trends.
        </p>
        <p className="text-5xl font-medium text-white">
          I'm driven by a strong work ethic to deliver top-notch results. I also
          have hands-on experience with cloud platforms and CI/CD for
          streamlined deployment.
        </p>
      </article>
    </div>
  );
};
