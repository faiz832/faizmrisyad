export default function Projects() {
  const projects = [
    { id: 1, title: "Project 1", description: "A cool project." },
    { id: 2, title: "Project 2", description: "Another cool project." },
  ];

  return (
    <div className="max-screen px-4 md:px-6 lg:px-8 pt-12 pb-16 sm:pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
      <h1 className="text-3xl font-bold">My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mt-4">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
