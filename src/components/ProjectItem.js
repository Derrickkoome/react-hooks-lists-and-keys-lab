import React from "react";

function ProjectItem({ title, name, about, image, technologies = [] }) {
  const displayTitle = name || title;

  return (
    <article className="project-item">
      <h3>{displayTitle}</h3>
      <p>{about}</p>
      {image && <img src={image} alt={displayTitle} />}
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech} className="technology">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectItem;
