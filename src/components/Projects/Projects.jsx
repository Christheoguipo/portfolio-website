import ProjectItem from "../ProjectItem/ProjectItem";
import PropTypes from 'prop-types';

function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} id="projects-section">
      <div className="container">
        <h1 className="section-title">Recent Projects</h1>
        <div className="grid">

          <ProjectItem
            imageSrc="./images/movie-vault-screenshot.png"
            imageAlt="Screenshot of the Movie Vault App"
            description="The Movie Vault App is a dynamic web application built with React, that allows users to browse a collection of movies, manage their profiles, and create
          a personalized list of favorite movies."
            title="Movie Vault App"
            techStack={["React", "Redux", "Parcel", "React Bootstrap"]}
            links={[
              { url: "https://retro-movie-vault.netlify.app/", icon: 'rocket', description: "Live Project" },
              { url: "https://github.com/Christheoguipo/myFlix-client", icon: 'fork', description: "Github Repo" }
            ]}
          />

          <ProjectItem
            imageSrc="./images/myflix-angular-client-screenshot.png"
            imageAlt="Screenshot of the myFlix Angular Client App"
            description="The myFlix App is a user-friendly movie database built with Angular, enabling users to explore classic movies, create
            accounts, log in, and save favorites with a responsive and dynamic interface."
            title="MyFlix App"
            techStack={["Angular", "TypeScript", "Typedoc", "Angular Material"]}
            links={[
              { url: "https://christheoguipo.github.io/myFlix-Angular-client/", icon: 'rocket', description: "Live Project" },
              { url: "https://github.com/Christheoguipo/myFlix-Angular-client", icon: 'fork', description: "Github Repo" }
            ]}
          />

          <ProjectItem
            imageSrc="./images/retro-movie-vault-api-documentation-screenshot.png"
            imageAlt="Screenshot of Retro Movie Vault API Documentation"
            description="The Retro Movie Vault API is a RESTful web service that provides access to a curated collection of classic movies. It also serves as the
            backend for the myFlix and Movie Vault App."
            title="Retro Movie Vault API"
            techStack={["Node.js", "Express.js", "MongoDB", "Mongoose", "APIdoc"]}
            links={[
              { url: "https://retro-movie-vault-5ccf6999c998.herokuapp.com/", icon: 'docs', description: "Documentation" },
              { url: "https://github.com/Christheoguipo/retro-movie-vault-api", icon: 'fork', description: "Github Repo" }
            ]}
          />

          <ProjectItem
            imageSrc="./images/meet-app-screenshot.png"
            imageAlt="Screenshot of the Meet App"
            description="The Meet app is a progressive web application (PWA) with offline capabilities, employing serverless architecture developed
            through test-driven development (TDD)."
            title="Meet App"
            techStack={["React", "AWS", "Recharts", "Google API", "React Bootstrap", "Puppeteer", "Jest-Cucumber", "React Testing Library"]}
            links={[
              { url: "https://christheoguipo.github.io/meet/", icon: 'rocket', description: "Live Project" },
              { url: "https://github.com/Christheoguipo/meet", icon: 'fork', description: "Github Repo" }
            ]}
          />

          <ProjectItem
            imageSrc="./images/simple-pokedex-screenshot.png"
            imageAlt="Screenshot of the Simple Pokédex App"
            description="The Pokédex App is a straightforward and user-friendly Pokémon encyclopedia that allows users to explore information about
            various Pokémon in a simple and intuitive interface."
            title="Pokédex"
            techStack={["HTML", "CSS", "JavaScript", "Pokémon API"]}
            links={[
              { url: "https://christheoguipo.github.io/simple-pokedex-app/", icon: 'rocket', description: "Live Project" },
              { url: "https://github.com/Christheoguipo/simple-pokedex-app", icon: 'fork', description: "Github Repo" }
            ]}
          />

          <ProjectItem
            imageSrc="./images/chat-both-screens.png"
            imageAlt="Screenshot of the Chat Demo Chat Room Screen"
            description="The Chat Demo App is a straightforward Android application showcasing basic chat functionality, allowing users to exchange
            messages, images and videos within a chat interface."
            title="Chat Demo App"
            techStack={["React", "React Native", "Expo", "Firebase", "Gifted Chat"]}
            links={[
              { url: "https://github.com/Christheoguipo/chat-demo", icon: 'fork', description: "Github Repo" }
            ]}
          />

        </div>
      </div >
    </section >
  );
}

Projects.propTypes = {
  projectsRef: PropTypes.func
}

export default Projects;