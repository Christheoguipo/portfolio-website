import PropTypes from "prop-types";
import "./Portfolio.css";
import {
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
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
    title: "OPS",
    img: "https://placehold.co/600x400",
    buttons: [],
    description:
      "Built an internal ERP system for tracking sales, inventory and collections with reporting for decision-making.",
    skills: ["C#", "MSSQL", "WinForms", "Crystal Report", "TFS"],
  },
  {
    title: "Reactivities",
    img: "/images/reactivities.png",
    buttons: [faRocket, faGithubAlt],
    description:
      "Full-stack activity manager using .NET Core and React with event tracking, forms and CRUD features.",
    skills: ["React", "MobX", "MediatR", "EF Core", "CQRS", "ASP.Net Core"],
  },
  {
    title: "Movie Vault",
    img: "https://placehold.co/600x400",
    buttons: [faRocket, faGithubAlt],
    description:
      "Single-page React app for browsing movies, user profiles and favorites via a REST API.",
    skills: ["React", "Redux", "Axios", "Bootstrap"],
  },
  {
    title: "myFlix",
    img: "https://placehold.co/600x400",
    buttons: [faRocket, faGithubAlt],
    description:
      "Angular-based movie app with routing, user authentication, and CRUD features powered by an external API.",
    skills: ["Angular", "Angular Material", "TypeScript"],
  },
  {
    title: "Movie Vault API",
    img: "https://placehold.co/600x400",
    buttons: [faGithubAlt],
    description:
      "RESTful API for managing classic movies, with user authentication, CRUD operations, and detailed documentation.",
    skills: ["RESTful", "JWT", "MongoDB", "Express", "Postman", "ASP.Net Core"],
  },
  {
    title: "Chat Demo",
    img: "https://placehold.co/600x400",
    buttons: [faGithubAlt],
    description:
      "Real-time chat app with user sessions using React Native and Expo.",
    skills: ["React Native", "Expo", "Firebase", "Gifted Chat"],
  },
  {
    title: "Meet App",
    img: "https://placehold.co/600x400",
    buttons: [faGithubAlt],
    description:
      "Real-time chat app with user sessions using React Native and Expo.",
    skills: ["React Native", "Expo", "Firebase", "Gifted Chat"],
  },
];

function Portfolio({ portfolioRef }) {
  return (
    <section ref={portfolioRef} id="portfolio" className="justify-items-center py-8 px-0 w-full"
      style={{
        background: `linear-gradient(127deg, #2147c4, rgba(255, 255, 255, 0) 70.71%),
                 linear-gradient(217deg, #15b141, rgba(255, 255, 255, 0) 70.71%),
                 linear-gradient(336deg, rgb(221, 77, 77), rgba(247, 247, 247, 0) 70.71%)`
      }}>

 

{/* .portfolio-container {
  width: 80rem;
  padding: 2rem;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 1rem;
} */}

      <span className="text-3xl font-bold mt-4 mb-10 block">Portfolio</span>
      <div className="flex gap-4">
        <span>All</span>
        <span>React</span>
        <span>Angular</span>
      </div>
      <div className="flex flex-wrap content-center gap-4 p-8">
        {portfolioData &&
          portfolioData.map((data, index) => (
            <PortfolioItem key={index} data={data} />
          ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  portfolioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Portfolio;
