import PropTypes from 'prop-types';

function Contact({ contactRef }) {

  return (
    <section ref={contactRef} id="contact-section">
      <div className="centered-section container">
        <div className="contact">
          <div>
            <h1>Let's Get Connected</h1>
          </div>

          <div className="grid-contact-icons">
            <a className="contact-icons" href="mailto:christheo.guipo@gmail.com" target="_blank">
              <img src="images/gmail-icon.svg" alt="Gmail icon" /><span>Gmail</span>
            </a>
            <a className="contact-icons" href="https://github.com/Christheoguipo" target="_blank">
              <img src="images/github_icon.svg" alt="Github" /><span>Github</span></a>
            <a className="contact-icons" href="https://www.linkedin.com/in/christheoguipo" target="_blank">
              <img src="images/linkedin_icon.svg" alt="LinkedIn" /><span>LinkedIn</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.func
}

export default Contact;