import ProfileImage from "../../assets/images/profile.jpeg";
import resume from "../../assets/document/resume.pdf";

export default function MyProfile() {
  return (
    <section className="max-screen px-4 md:px-6 lg:px-8 pt-12 pb-16 sm:pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <div className="flex flex-col items-center gap-8 overflow-x-hidden pt-0 sm:flex-row md:gap-16 md:py-12 md:pt-8">
        <div className="relative w-full sm:w-1/2">
          <div className="h-full w-full overflow-hidden rounded-full">
            <img src={ProfileImage} alt="Hero Image" loading="lazy" className="aspect-[4/4] h-[400px] w-[400px] object-cover object-top transition duration-300 hover:scale-[1.015]" />
          </div>
        </div>
        <div className="w-full space-y-6">
          <h1 className="text-balance font-bebas text-5xl lg:text-7xl">
            A <span className="text-[var(--highlight)]">frontend developer</span> &amp; web developer
          </h1>
          <p className="text-balance">I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.</p>
          <div>
            <a download="faizmr-resume" href={resume} className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold bg-[var(--highlight)] text-[var(--bg-900)] px-8 py-3">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
