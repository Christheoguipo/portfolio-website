import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./PortfolioItem.css";

function PortfolioItem({ data }) {
  return (
    <div className="portfolio">
      <div className="group portfolio-content ">
        <div className="portfolio-image-container">
          {/* <FontAwesomeIcon className="portfolio-image" icon={faChartLine} /> */}
          <img className="portfolio-image" src={data.img} />
          {/* <FontAwesomeIcon className="portfolio-image" icon={faChartLine} /> */}
        </div>
        <div className="portfolio-info">
          <span className="block text-2xl">{data.title}</span>

          <p className="block content-center text-left text-sm pt-1">
            {data.description}
          </p>
          <div>
            <div className="portfolio-button-container">
              {data.buttons.length > 0 ? (
                <>
                  <span className="text-xs">Links:</span>
                  {data.buttons.map((button, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="transition-all duration-300 hover:text-[var(--text-accent)] hover:scale-150 hover:cursor-pointer group-hover:animate-[pulse_500ms_ease-in-out_2]"
                      icon={button}
                    />
                  ))}
                </>
              ) : (
                <span className="text-xs">(This app is private)</span>
              )}
            </div>
            {data.skills.length > 0 &&
              data.skills.map((skill, index) => (
                <div key={index} className="tech-skill">
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    buttons: PropTypes.array,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PortfolioItem;
