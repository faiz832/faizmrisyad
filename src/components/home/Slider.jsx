export default function Slider() {
  const datas = [{ title: "Frontend Developer" }, { title: "Fullstack Developer" }, { title: "Web Developer" }];

  // Duplicate the data to create a seamless loop
  const duplicatedData = [...datas, ...datas];

  return (
    <div className="relative flex-col overflow-hidden border-y border-[var(--bg-700)] py-8">
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-4">
          {duplicatedData.map((data, index) => (
            <div key={index} className="flex items-center gap-4">
              <h2 className="font-lexend text-5xl leading-none text-[var(--bg-600)]">{data.title}</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--bg-600)]">
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
              </svg>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bg-900)]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bg-900)]"></div>
      </div>

      <style>{`
        .marquee {
          animation: marquee 50s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
