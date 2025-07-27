import PropTypes from "prop-types";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import PortfolioItem from "../common/PortfolioItem/PortfolioItem";

const portfolioData = [
  {
    title: "Xter Portal",
    img: "/images/xter-portal.png",
    description:
      "Employee portal with dashboards and profile management built using Next.js.",
    skills: ["Next.js", "MSSQL", "TailwindCSS"],
  },
  {
    title: "Reactivities",
    img: "/images/reactivities.png",
    buttons: [
      {
        icon: faGithubAlt,
        link: "https://github.com/Christheoguipo/ActivitiesApp",
      },
    ],
    description:
      "Full-stack activity manager using .NET Core and React with event tracking, forms and CRUD features.",
    skills: ["React", "MobX", "MediatR", "CQRS", "EF Core", "ASP.Net Core"],
  },
  {
    title: "OPS",
    img: "/images/ops.png",
    description:
      "Internal ERP system for tracking sales, inventory and collections with reporting for decision-making.",
    skills: ["C#", "MSSQL", "WinForms", "TFS", "Crystal Report"],
  },
  {
    title: "Movie Vault",
    img: "/images/movie-vault.png",
    buttons: [
      { icon: faRocket, link: "https://retro-movie-vault.netlify.app/" },
      {
        icon: faGithubAlt,
        link: "https://github.com/Christheoguipo/myFlix-client",
      },
    ],
    description:
      "Single-page React app for browsing movies, user profiles and favorites via a REST API.",
    skills: ["React", "Redux", "Bootstrap", "Axios"],
  },
  {
    title: "myFlix",
    img: "/images/my-flix.png",
    buttons: [
      {
        icon: faRocket,
        link: "https://christheoguipo.github.io/myFlix-Angular-client/",
      },
      {
        icon: faGithubAlt,
        link: "https://github.com/Christheoguipo/myFlix-Angular-client",
      },
    ],
    description:
      "Angular-based movie app with routing, user authentication and CRUD features powered by an external API.",
    skills: ["Angular", "Angular Material", "TypeScript"],
  },
  {
    title: "Meet App",
    img: "/images/meet-app.png",
    buttons: [
      { icon: faGithubAlt, link: "https://github.com/Christheoguipo/meet" },
    ],
    description:
      "Basic Serverless React App for data visualization using OAuth and Google Calendar API.",
    skills: ["React", "Recharts", "AWS", "Google API", "Jest"],
  },
  {
    title: "Chat Demo",
    img: "/images/chat-demo.png",
    buttons: [
      {
        icon: faGithubAlt,
        link: "https://github.com/Christheoguipo/chat-demo",
      },
    ],
    description:
      "Demo of a real-time chat app with user sessions using React Native and Expo.",
    skills: ["React Native", "Expo", "Firebase", "Gifted Chat"],
  },
  {
    title: "Movie Vault API",
    img: "/images/movie-vault-api.png",
    buttons: [
      {
        icon: faGithubAlt,
        link: "https://github.com/Christheoguipo/retro-movie-vault-api",
      },
    ],
    description:
      "RESTful API for managing classic movies, with user authentication, CRUD operations and detailed documentation.",
    skills: ["RESTful", "JWT", "MongoDB", "Express", "Postman"],
  },
];

function Portfolio({ portfolioRef }) {
  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="justify-items-center py-8 px-0 w-full scroll-mt-[var(--navbar-height)]"
      style={{
        background: `linear-gradient(127deg, #2147c4, rgba(255, 255, 255, 0) 70.71%),
                 linear-gradient(217deg, #15b141, rgba(255, 255, 255, 0) 70.71%),
                 linear-gradient(336deg, rgb(221, 77, 77), rgba(247, 247, 247, 0) 70.71%)`,
      }}
    >
      <span className="text-2xl md:text-3xl font-bold mt-4 mb-10 block text-center">
        Portfolio
      </span>
      <div className="flex flex-wrap content-center justify-center gap-4 2xl:grid 2xl:grid-cols-4 2xl:!gap-10">
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
