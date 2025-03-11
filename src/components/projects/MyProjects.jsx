import SplitText from "../SplitText";
import ListProjects from "./ListProjects";

export default function MyProjects() {
  return (
    <section className="max-screen mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
      <div className="mb-4 flex w-full items-center justify-center gap-2 text-[(--highlight)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--highlight)" }}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        <p className="font-lexend text-sm uppercase leading-none text-[var(--highlight)]">My Projects</p>
      </div>
      <div className="w-full flex justify-center">
        <SplitText
          text="Here’s a showcase of my projects."
          className="text-5xl font-semibold text-center font-bebas tracking-wider text-[var(--text-primary)] leading-none"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <ListProjects />
    </section>
  );
}
