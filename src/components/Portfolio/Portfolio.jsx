import PropTypes from "prop-types";
import "./Portfolio.css";
import {
  faBook,
  faFilm,
  faGlobe,
  faRocket,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import PortfolioItem from "../common/PortfolioItem/PortfolioItem";

const portfolioData = [
  {
    title: "Xter Group Portal",
    img: "/images/dashboard.png",
    buttons: [],
    description:
      "Internal portal with dashboards and profile management built using Next.js.",
    skills: ["Next.js", "MSSQL", "TailwindCSS"],
  },
  {
    title: "Reactivities",
    img: "/images/reactivities.png",
    buttons: [faRocket, faGithubAlt],
    description:
      "Full-stack activity manager using .NET Core and React with event tracking, forms and CRUD features.",
    skills: ["React", "MobX", "MediatR", "EF Core", "CQRS", "ASP.Net Core"],
  },
];

function Portfolio({ portfolioRef }) {
  return (
    <section ref={portfolioRef} id="portfolio-section">
      <span className="text-3xl font-bold mt-4 mb-10 block">Portfolio</span>
      <div className="filter-container">
        <span>All</span>
        <span>React</span>
        <span>Angular</span>
      </div>
      <div className="portfolio-container">
        {portfolioData &&
          portfolioData.map((data, index) => (
            <PortfolioItem key={index} data={data} />
          ))}

        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faComments} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faTicket} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faBook} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faFilm} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faGlobe} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-content">
            <div className="portfolio-image-container">
              <FontAwesomeIcon className="portfolio-image" icon={faHandshake} />
            </div>
            <div className="portfolio-info">
              <span className="block text-md">Xter Group Portal</span>
              <div className="portfolio-button-container">
                <FontAwesomeIcon className="portfolio-button" icon={faRocket} />
                <FontAwesomeIcon
                  className="portfolio-button"
                  icon={faGithubAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  portfolioRef: PropTypes.func,
};

export default Portfolio;
