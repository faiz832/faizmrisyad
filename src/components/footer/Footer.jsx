import { Link } from "react-router-dom";
import SplitText from "../SplitText";

export default function Footer() {
  return (
    <footer className="max-screen px-4 md:px-6 lg:px-8 z-10 space-y-6 py-8">
      <div className="flex justify-center items-center flex-col rounded-3xl bg-[var(--bg-800)] px-4 py-14 shadow">
        <div className="flex justify-center items-center mb-4 gap-2 rounded-full bg-[#3065af40] px-4 py-2">
          <span className="relative flex h-[6px] w-[6px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-[var(--highlight)]"></span>
          </span>
          <p className="text-xs text-[var(--text-primary)]">Available for work</p>
        </div>

        <SplitText
          text="Ready to create? Let’s get started!"
          className="m-auto mb-6 max-w-md text-6xl font-semibold text-center font-bebas text-[var(--text-primary)] leading-none"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold bg-[var(--highlight)] text-[var(--bg-900)] px-8 py-3" href="/contact">
          Contact Me
        </Link>

        <div className="flex opacity-container mt-8 gap-6 text-text-secondary sm:hidden">
          <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/faizrisyad">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a aria-label="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/faiz832">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <a aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/faizmr_d">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>

          <a aria-label="Gmail" target="_blank" rel="noopener noreferrer" href="mailto:risyad832@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="z-10 flex flex-col justify-between gap-4 sm:flex-row">
        <p className="mb-16 text-center text-sm sm:mb-0 sm:text-left">You've reached the bottom :)</p>
        <div className="sm:flex justify-center items-center opacity-container hidden gap-6 text-text-secondary">
          <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/faizrisyad">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a aria-label="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/faiz832">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <a aria-label="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/faizmr_d">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>

          <a aria-label="Gmail" target="_blank" rel="noopener noreferrer" href="mailto:risyad832@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
