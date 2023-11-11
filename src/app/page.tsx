import { Skills } from "@/components/Skills";
import "./page.css";

export default function Home() {
  return (
    <div className="container background-animate">
      <header className="flex-col items-start justify-center gap-3 ">
        <h1 className="text-6xl font-bold text-white">Lior Vainer</h1>
        <h4 className="text-4xl font-normal text-white">
          Full Stack Developer
        </h4>
      </header>

      <article>
        <p className="text-4xl font-normal text-white">
          I'm an experienced software engineer, specializing in full-stack
          development. I'm passionate about UI/UX design and stay up-to-date
          with the latest tech trends. I'm driven by a strong work ethic to
          deliver top-notch results. I also have hands-on experience with cloud
          platforms and CI/CD for streamlined deployment.
        </p>
      </article>
      <main>
        <article>
          <legend className="text-sm font-bold text-black">Skills</legend>
          <Skills />
        </article>
      </main>
    </div>
  );
}
