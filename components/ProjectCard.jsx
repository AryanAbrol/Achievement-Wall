import React from "react";
import { FaExternalLinkAlt, FaEdit } from "react-icons/fa"; // Icons for better UX

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Card Header */}
      <div className="card-header">
        <h3 className="project-name">{project.name}</h3>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
          View Your Wall<FaExternalLinkAlt />
        </a>
      </div>

      {/* Project Description */}
      <p className="project-description">{project.description}</p>

      {/* Card Footer */}
      <div className="card-footer">
        <p className="last-updated">Last Updated: {project.lastUpdated}</p>
        <button className="edit-button">
          <FaEdit className="edit-icon" /> Edit
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
