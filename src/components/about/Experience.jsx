import SplitText from "../SplitText";
import detikcom from "../../assets/images/detikcom.png";
import dinmanagement from "../../assets/images/dinmanagement.jpg";

export default function Experience() {
  const workData = [
    {
      company: "PT Trans Digital Media",
      position: "Frontend Designer Intern",
      link: "https://www.detik.com/",
      img: detikcom,
      timeline: "Feb 2024 — June 2024",
    },
    {
      company: "Din Management",
      position: "Web Developer Intern",
      link: "",
      img: dinmanagement,
      timeline: "Sep 2023 — Dec 2023",
    },
  ];

  return (
    <section className="max-screen flex flex-col gap-8 sm:flex-row sm:gap-12 px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="">
        <div className="mb-4 flex w-fit items-center gap-2 text-[(--highlight)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--highlight)" }}>
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
          </svg>
          <p className="font-lexend text-sm uppercase leading-none text-[var(--highlight)]">Experience</p>
        </div>

        <SplitText
          text="Work History"
          className="text-5xl font-semibold text-center font-bebas tracking-wider text-[var(--text-primary)] leading-none"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <p className="mt-4 text-balance"> I had an internship at a national brand, crafting digital solutions that are accessible, effective, and support business needs.</p>
      </div>

      <div className="flex w-full flex-col items-center">
        {workData.map((work, index) => (
          <div key={index} className="w-full mb-4 border-[var(--bg-700)] rounded-none border-0 border-b bg-transparent">
            <div className="flex-1 justify-between text-left text-base font-medium text-[var(--text-primary)] flex items-center gap-2 p-0 pb-4">
              <img src={work.img} alt={work.company} loading="lazy" width="50" height="50" className="mr-2 aspect-square h-10 w-fit rounded-full border border-[var(--bg-600)] bg-[var(--bg-800)]" />
              <div className="w-full">
                <h6 className="text-text-primary">{work.position}</h6>
                <div className="flex justify-between">
                  <a target="_blank" className="text-sm text-[var(--text-secondary)] underline-offset-4 hover:underline" href={work.link}>
                    @{work.company}
                  </a>
                  <p className="text-xs text-[var(--text-secondary)]">{work.timeline}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
