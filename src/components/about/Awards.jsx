import SplitText from "../SplitText";

export default function Awards() {
  const awards = [
    {
      title: "Junior Web Developer",
      organizer: "(BNSP) Indonesian Professional Certification Authority",
      time: "December 2024",
    },
    {
      title: "3rd Place INVFESTXISF Web Programming",
      organizer: "Universitas Telkom Purwokerto",
      time: "December 2024",
    },
    {
      title: "1st Place FESTIDA Web Development",
      organizer: "Universitas Darussalam Gontor",
      time: "November 2024",
    },
    {
      title: "Top 10 Landing Page Competition",
      organizer: "Universitas Muhammadiyah Surakarta",
      time: "November 2023",
    },
    {
      title: "2nd Place ICC Web Front-end Competition",
      organizer: "Universitas Muhammadiyah Purwokerto",
      time: "August 2023",
    },
  ];

  return (
    <section className="max-screen px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <div className="mb-4 flex w-fit items-center gap-2 text-[(--highlight)] mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--highlight)" }}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        <p className="font-lexend text-sm uppercase leading-none text-[var(--highlight)]">Awards</p>
      </div>
      <div className="text-center">
        <SplitText
          text="Awards and cerfitication"
          className="text-5xl font-semibold text-center font-bebas tracking-wider text-[var(--text-primary)] leading-none"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        {awards.map((award, index) => (
          <div key={index} className="w-full mb-4 border-[var(--bg-700)] rounded-none border-0 border-b bg-transparent">
            <div className="p-0 pb-4">
              <h1 className="text-[var(--text-primary)]">{award.title}</h1>
              <div className="flex flex-wrap justify-between text-xs text-[var(--text-secondary)]">
                <p>{award.organizer}</p>
                <p>{award.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
