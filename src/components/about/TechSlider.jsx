import Bootstrap from "../../assets/icons/Bootstrap.svg";
import CSS from "../../assets/icons/CSS.svg";
import GIT from "../../assets/icons/GIT.svg";
import HTML from "../../assets/icons/HTML.svg";
import JS from "../../assets/icons/JS.svg";
import Laravel from "../../assets/icons/Laravel.svg";
import MongoDB from "../../assets/icons/MongoDB.svg";
import Mysql from "../../assets/icons/Mysql.svg";
import Next from "../../assets/icons/Next.svg";
import PHP from "../../assets/icons/PHP.svg";
import React from "../../assets/icons/React.svg";
import Tailwind from "../../assets/icons/Tailwind.svg";

export default function TechSlider() {
  const datas = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JS },
    { name: "PHP", icon: PHP },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Tailwind", icon: Tailwind },
    { name: "React", icon: React },
    { name: "Next.js", icon: Next },
    { name: "Laravel", icon: Laravel },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: MongoDB },
    { name: "GIT", icon: GIT },
  ];

  // Duplicate data untuk loop tanpa batas
  const duplicatedData = [...datas, ...datas];

  return (
    <div className="relative flex-col overflow-hidden border-y border-[var(--bg-700)] py-8">
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-4">
          {duplicatedData.map((data, index) => (
            <div key={index} className="flex flex-row-reverse items-center gap-2 bg-[var(--bglightdark)] px-4 py-2 rounded-full">
              <span className="text-sm">{data.name}</span>
              <img src={data.icon} alt={data.name} className="w-6 h-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Efek gradasi di kiri & kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bg-900)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bg-900)]"></div>

      {/* Animasi marquee */}
      <style>{`
        .marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
