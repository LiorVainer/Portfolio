import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main className="container background-animate">
      <header className="flex-col items-start justify-center gap-3 ">
        <h1 className="text-6xl font-bold text-white">Lior Vainer</h1>
        <h4 className="text-4xl font-normal text-white">
          Full Stack Developer
        </h4>
      </header>
      <Link href="/about">About Me</Link>

      <div className="p-24 bg-white rounded-sm">
        <h2 className="text-sm font-bold text-black">Description</h2>
      </div>
    </main>
  );
}
