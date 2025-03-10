export default function SocialMedia() {
  const socialMedias = [
    { name: "Linkedin", url: "https://www.linkedin.com/in/faizrisyad" },
    { name: "Github", url: "https://github.com/faiz832" },
    { name: "Instagram", url: "https://www.instagram.com/faizmr_d" },
    { name: "Gmail", url: "mailto:risyad832@gmail.com" },
  ];

  return (
    <ul className="hidden h-fit gap-4 md:flex group">
      {socialMedias.map((socialMedia, index) => (
        <li key={index} className="h-fit group/item">
          <a
            className="flex items-center gap-2 text-sm uppercase text-[var(--text-secondary)] transition-all duration-300 group-hover/item:text-[var(--text-primary)] group-hover:opacity-40 group-hover/item:opacity-100"
            href={socialMedia.url}
            target="_blank"
          >
            {socialMedia.name}
            <span className="transition-transform duration-300 group-hover/item:rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
