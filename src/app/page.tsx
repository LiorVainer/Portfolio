import { SKILLS } from "../constants/skills.const";
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

      <main>
        <article>
          <legend className="text-sm font-bold text-black">Profile</legend>
          <p className="text-sm font-normal text-black">
            I'm an experienced software engineer, specializing in full-stack
            development. I'm passionate about UI/UX design and stay up-to-date
            with the latest tech trends. I'm driven by a strong work ethic to
            deliver top-notch results. I also have hands-on experience with
            cloud platforms and CI/CD for streamlined deployment.
          </p>
        </article>

        <article>
          <legend className="text-sm font-bold text-black">Skills</legend>
          <div>
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="inline-block px-2 py-1 mr-2 mb-2 text-sm font-medium text-black bg-gray-200 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
