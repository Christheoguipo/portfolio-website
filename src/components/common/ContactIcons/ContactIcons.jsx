import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactIcons() {

    return (
        <div className="flex gap-4 pt-4">
            <a target="_blank" href="https://github.com/Christheoguipo" rel="noopener noreferrer">
                <FontAwesomeIcon className="icons" icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/christheoguipo/" rel="noopener noreferrer">
                <FontAwesomeIcon className="icons" icon={faLinkedinIn} />
            </a>
            <a target="_blank" href="mailto:christheo.guipo@gmail.com?subject=Let's%20Connect" rel="noopener noreferrer" title="christheo.guipo@gmail.com">
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
            </a>
            {/* <FontAwesomeIcon className="icons" icon={faWhatsapp} /> */}
        </div>
    );
}

export default ContactIcons;