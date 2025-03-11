import { useEffect, useState } from "react";
import { projectData } from "../data/Projects";
import { projectCategories } from "../data/Projects";

export default function ListProjects() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setProjects([...projectData].sort((a, b) => b.id - a.id));
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setProjects([...projectData].sort((a, b) => b.id - a.id));
    } else {
      setProjects([...projectData].sort((a, b) => b.id - a.id).filter((project) => project.category === category));
    }
  };

  return (
    <div>
      {/* Navigation Categories */}
      <div className="flex space-x-4 mt-8 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
            className={`px-4 sm:px-8 py-2 text-sm capitalize transition-all duration-300 rounded-full cursor-pointer
              ${activeCategory === category.name ? "bg-[var(--bg-700)] scale-105" : "hover:bg-[var(--backdrop)]"}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-16 sm:gap-y-8 group">
        {projects.map((project) => (
          <div key={project.id} className="group/item">
            <a href={project.link} target="_blank">
              <div className="group-hover:opacity-40 group-hover/item:opacity-100 transition-all duration-300 ease-in-out">
                <div className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover group-hover/item:scale-105 transition-all duration-300 ease-in-out" />
                </div>
                <div className="mt-4 space-y-2">
                  <h1 className="text-xl leading-normal">{project.title}</h1>
                  <div className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                      <p className="text-sm capitalize text-[var(--text-secondary)]">{project.category}</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{project.year}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
