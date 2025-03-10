import ScrollReveal from "../ScrollReveal";

export default function AboutMe() {
  return (
    <section className="max-screen flex flex-col justify-center items-center mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="mb-4 flex w-fit items-center gap-2 text-[(--highlight)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--highlight)" }}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
        </svg>
        <p className="shimmer word-spacing font-lexend text-xl uppercase leading-none text-[var(--highlight)]">About Me</p>
      </div>

      <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={0} blurStrength={3} textClassName="font-lexend" containerClassName="flex justify-center items-center text-center">
        With hands-on experience in web development, I have collaborated with UI/UX designers to translate Figma designs into responsive web applications. I have also worked with backend developers for efficient API integration. Familiar
        with HTML, CSS (SCSS), JavaScript (React), and PHP (Laravel).
      </ScrollReveal>
    </section>
  );
}
