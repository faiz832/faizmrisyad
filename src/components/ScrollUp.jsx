import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    const ButtonUp = document.getElementById("ButtonUp");

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        ButtonUp.classList.add("opacity-100");
      } else {
        ButtonUp.classList.remove("opacity-100");
      }
    });
  });

  function handleScrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="ButtonUp"
      className="opacity-0 whitespace-nowrap text-sm font-semibold h-11 w-11 fixed bottom-[84px] right-4 z-50 flex items-center justify-center rounded-full border border-[var(--bg-700)] bg-[var(--backdrop)] p-3 shadow backdrop-blur-md sm:bottom-4"
      onClick={handleScrollUp}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12 7-7 7 7"></path>
        <path d="M12 19V5"></path>
      </svg>
    </button>
  );
}
