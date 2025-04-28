import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleButtonTheme from "./ToggleButtonTheme";
import NavLinks from "./NavLinks";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const prevScrollRef = useRef(0);
  const navRef = useRef(null);
  const maxScrollForWidth = 100; // Titik max untuk pengurangan width
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [showMenu, setShowMenu] = useState(false);

  // Fungsi untuk update status ukuran layar
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 640);
  };

  const handleScroll = () => {
    if (isSmallScreen) return; // Skip scroll behavior jika layar kecil

    const currentScrollY = window.scrollY;
    const prevScrollY = prevScrollRef.current;

    prevScrollRef.current = currentScrollY;
    setScrollY(currentScrollY);

    if (!navRef.current) return;

    const isScrollingDown = currentScrollY > prevScrollY;

    if (isScrollingDown) {
      navRef.current.style.transition = "max-width 0.3s ease-in-out";
    } else {
      navRef.current.style.transition = "background-color 0.5s ease-in-out";
    }
  };

  useEffect(() => {
    // Set nilai awal
    const initialScroll = window.scrollY;
    setScrollY(initialScroll);
    prevScrollRef.current = initialScroll;

    // Tambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Cek ukuran layar saat pertama kali load

    // Tambahkan event listener scroll hanya jika bukan layar kecil
    if (!isSmallScreen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  // Hitung max-width berdasarkan scroll hanya jika layar >= sm
  const calculateMaxWidth = () => {
    if (isSmallScreen) return "100%"; // Tidak berubah di layar kecil

    const startWidth = 1280;
    const endWidth = 600;
    const widthDifference = startWidth - endWidth;
    const scrollProgress = Math.min(scrollY / maxScrollForWidth, 1);

    return startWidth - widthDifference * scrollProgress;
  };

  const maxWidth = calculateMaxWidth();
  const isScrolled = scrollY > 1;
  const hasReachedMinWidth = maxWidth <= 601;

  return (
    <>
      <header className="container fixed left-0 right-0 top-0 z-50 w-full mx-auto py-4">
        <nav
          ref={navRef}
          className="max-screen pointer-events-auto flex w-full mx-auto items-center justify-between gap-6 rounded-full py-1 px-4 md:pl-6 lg:pl-8"
          style={{
            width: "100%",
            maxWidth: `${maxWidth}px`,
            backgroundColor: isScrolled ? "var(--backdrop)" : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
            outline: hasReachedMinWidth ? "1px solid var(--bg-700)" : "1px solid transparent",
            opacity: 1,
            willChange: "max-width",
            transform: "none",
          }}
        >
          <Link to="/" className="text-xl font-lexend">
            FMR
          </Link>
          <NavLinks />
          <ToggleButtonTheme />
        </nav>
      </header>
      <nav className="fixed bottom-0 left-0 right-0 z-50 w-full sm:hidden">
        <div className="absolute bottom-0 left-0 right-0 z-50 w-full rounded-t-3xl border-t border-[var(--bg-700)] bg-[var(--backdrop)] text-[var(--text-secondary)] shadow backdrop-blur-md transition-transform duration-300">
          <ul className="flex w-full justify-evenly">
            <li className="p-4">
              <Link className="flex flex-col items-center justify-center gap-1 text-highlight-primary" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="text-xs">Home</span>
              </Link>
            </li>
            <li className="p-4">
              <Link className="flex flex-col items-center justify-center gap-1 text-text-primary" to="/about">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
                <span className="text-xs">About</span>
              </Link>
            </li>
            <li className="p-4">
              <Link className="flex flex-col items-center justify-center gap-1 text-text-primary" to="/projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
                <span className="text-xs">Projects</span>
              </Link>
            </li>
            <li className="p-4">
              <Link className="flex flex-col items-center justify-center gap-1 text-text-primary" to="/contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                <span className="text-xs">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
