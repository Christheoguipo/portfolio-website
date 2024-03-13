import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCodeFork, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectLink({ links }) {

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'rocket':
        return faRocket;
      case 'fork':
        return faCodeFork;
      case 'docs':
        return faFileAlt;
    }
  }

  return (
    <>
      {links.map((link, index) => {
        return <a key={index} href={link.url} className="button" target="_blank">
          {getIcon(link.icon) && <FontAwesomeIcon icon={getIcon(link.icon)} />} {link.description}</a>
      })}
    </>
  )
}

ProjectLink.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProjectLink;