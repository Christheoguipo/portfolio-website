import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactIcons() {
  return (
    <div className="flex gap-3 md:!gap-4 pt-2 md:pt-4 ">
      <a
        target="_blank"
        href="https://github.com/Christheoguipo"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="text-[var(--text)] transition-all duration-200 cursor-pointer md:text-2xl text-xl hover:text-[var(--highlight)] hover:scale-125"
          icon={faGithub}
          title="Github"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/christheoguipo/"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="text-[var(--text)] transition-all duration-200 cursor-pointer md:text-2xl text-xl hover:text-[var(--highlight)] hover:scale-125"
          icon={faLinkedinIn}
          title="LinkedIn"
        />
      </a>
      <a
        target="_blank"
        href="mailto:christheo.guipo@gmail.com?subject=Let's%20Connect"
        rel="noopener noreferrer"
        title="christheo.guipo@gmail.com"
      >
        <FontAwesomeIcon
          className="text-[var(--text)] transition-all duration-200 cursor-pointer md:text-2xl text-xl hover:text-[var(--highlight)] hover:scale-125"
          icon={faEnvelope}
        />
      </a>
    </div>
  );
}

export default ContactIcons;
