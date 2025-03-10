import { useEffect, useState } from "react";
import SplitText from "../SplitText";
import { projectData } from "../data/Projects";

export default function MyWork() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <section className="max-screen mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:pt-32 pb-20">
      <div className="mb-4 flex w-fit items-center gap-2 text-[(--highlight)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--highlight)" }}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        <p className="font-lexend text-sm uppercase leading-none text-[var(--highlight)]">My Work</p>
      </div>
      <SplitText
        text="Recent Projects"
        className="text-5xl font-semibold text-center font-bebas tracking-wider text-[var(--text-primary)] leading-none"
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <p className="mt-2 text-base">Here's a collection of some of my recent projects.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-16 sm:gap-y-8 py-16 group">
        {projects.map((project) => (
          <div key={project.id} className="group/item">
            <a href={project.link} target="_blank">
              <div className="group-hover:opacity-40 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                <div className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover group-hover/item:scale-105 transition-all duration-300 ease-in-out" />
                </div>
                <div className="mt-4 space-y-2">
                  <h1 className="text-xl leading-normal">{project.title}</h1>
                  <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-sm capitalize text-[var(--text-secondary)]">{project.category}</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{project.year}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <a href="/projects" className="flex mx-auto max-w-fit whitespace-nowrap rounded-full text-sm font-semibold bg-[var(--highlight)] text-[var(--bg-900)] px-8 py-3">
        View All Projects
      </a>
    </section>
  );
}
