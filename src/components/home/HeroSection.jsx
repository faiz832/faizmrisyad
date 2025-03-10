import SocialMedia from "./SocialMedia";
import "./hero.css";

export default function HeroSection() {
  return (
    <section className="max-screen px-4 md:px-6 lg:px-8 pt-12 pb-16 sm:pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <p className="mb-8 lg:mt-8 flex items-center gap-2">
        <span className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hand text-[var(--highlight)]"
          >
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
          </svg>
        </span>
        Hey! It's me Faiz,
      </p>
      <div className="w-full lg:max-w-6xl font-lexend">
        <h1 className="text-pretty text-5xl leading-none md:text-6xl lg:w-3/4 lg:text-7xl text-[var(--text-primary)] font-bebas tracking-wider">
          Developing
          <span className="text-[var(--highlight)]"> interactive and accessible </span>
          web experiences efficiently.
        </h1>
      </div>
      <div className="md:flex mt-8 flex flex-col justify-center items-center gap-4 md:flex-row">
        <div className="h-[1px] w-full bg-[var(--bg-700)]"></div>
        <p className="w-full text-[var(--text-secondary)] font-satoshi">I interned at a national brand, crafting pixel-perfect, engaging, and accessible digital experiences that drive results and support business goals.</p>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <SocialMedia />
        <a className="max-w-fit text-sm font-medium text-[var(--bg-900)] bg-[var(--highlight)] rounded-full px-8 py-3" href="/about">
          Know me better
        </a>
      </div>
    </section>
  );
}
