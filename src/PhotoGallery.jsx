// ProjectGallery.js

import React from "react";
import "./PhotoGallery.css"; // Import CSS file for styling

const ProjectGallery = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: "TRUEGRID PERMEABLE PAVERS",
      imageUrl:
        "https://www.truegridpaver.com/wp-content/uploads/2019/11/word-image-5.webp",
      description:
        "Permeable paving like TRUEGRID: sustainable, drains water, reduces pollution.",
    },
    {
      id: 2,
      title: "ICF CONSTRUCTION FROM FOX BLOCKS",
      imageUrl:
        "https://www.truegridpaver.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-18-at-8.25.40-AM.webp",
      description:
        "Fox Blocks: Eco-friendly, durable ICF construction for extreme weather resilience.",
    },
    {
      id: 3,
      title: "GREEN SPACES",
      imageUrl:
        "https://www.truegridpaver.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-18-at-8.26.39-AM.webp",
      description:
        "Urban green spaces: vital for sustainability, air quality, and aesthetics.",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container">
      <div className="project-gallery">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <a href={`/project/${project.id}`}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
