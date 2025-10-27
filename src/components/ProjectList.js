import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <section className="projects">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          title={project.title}
          about={project.about}
          image={project.image}
          technologies={project.technologies}
        />
      ))}
    </section>
  );
}

export default ProjectList;
