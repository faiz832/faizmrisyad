import { Link, useLocation } from "react-router-dom";

export default function NavLinks() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div className="hidden sm:flex gap-6 text-sm font-satoshi">
      {links.map((link, index) => {
        const isActive = currentPath === link.url;

        return (
          <Link key={index} to={link.url} className={`group flex items-center gap-2 relative ${isActive ? "text-[var(--text-primary)]" : ""}`}>
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity ${isActive ? "bg-[var(--highlight)] opacity-100" : "opacity-0"}`}></div>

            <span className="relative inline-flex overflow-hidden">
              <div className={`translate-y-0 skew-y-0 transform-gpu ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"} transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12`}>
                {link.name}
              </div>
              <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-[var(--text-primary)] transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">{link.name}</div>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
