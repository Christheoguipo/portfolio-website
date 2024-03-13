import PropTypes from 'prop-types';
import ProjectLink from '../ProjectLink/ProjectLink';
import { useState } from 'react';

function ProjectItem({ imageSrc, imageAlt, description, title, techStack, links }) {

  const [touchTriggered, setTouchTriggered] = useState(false);

  const handleTouchStart = () => {
    setTouchTriggered(true);
  }

  const handleClick = () => {
    setTouchTriggered(true);
  }

  const handleTouchEnd = () => {
    setTouchTriggered(false);
  }

  return (
    <div className="grid-item">
      <div className={`project-img-wrapper ${touchTriggered ? 'touch-triggered' : ''}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onClick={handleClick} >
        <img className="project-img" src={imageSrc} alt={imageAlt} />
        <div className="project-description-overlay">
          <p className="project-description">
            {description}
          </p>
        </div>
      </div>
      <div className="project-content">

        <h2 className="centered-content">{title}</h2>

        <div className="grid-tech-and-links">
          <div className="grid-tech-and-links-item">
            <h4>Tech Stack:</h4>
            <ul>
              {techStack.map((tech, index) => {
                return <li key={index}>{tech}</li>
              })}
            </ul>
          </div>
          <div className="grid-tech-and-links-item">
            <h4>Links:</h4>
            <ProjectLink links={links} />
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.array,
}

export default ProjectItem;