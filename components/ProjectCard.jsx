import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3 className="project-name">{project.name}</h3>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="live-link"
        >
          Live
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="card-footer">
        <p className="last-updated">{project.lastUpdated}</p>
        <button className="connect-repo-button">Edit</button>
      </div>
    </div>
  );
};

export default ProjectCard;
