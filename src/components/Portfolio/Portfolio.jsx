import PropTypes from 'prop-types';
import './Portfolio.css';
import { faBaseball, faBook, faChartLine, faFilm, faGlobe, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHandshake } from '@fortawesome/free-regular-svg-icons';

function Portfolio({ portfolioRef }) {
    return (<section ref={portfolioRef} id="portfolio-section">

        <span className='text-3xl font-bold mt-4 mb-10 block'>Portfolio</span>
        <div className='filter-container'>
            <span>All</span>
            <span>React</span>
            <span>Angular</span>

        </div>
        <div className='portfolio-container'>
            <div className="portfolio">
                <div className='portfolio-content'>
                    <div className='portfolio-icon-container'>
                        <FontAwesomeIcon className='portfolio-icon' icon={faFilm} />
                    </div>
                    <div className='portfolio-info'>
                        <span className='block text-xl mb-1'>Movie Vault</span>
                        <div className='link-icons'>
                            <a target='_blank' href='https://retro-movie-vault.netlify.app'>Live</a>
                            <a target='_blank' href='https://retro-movie-vault.netlify.app'>Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faComments} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faTicket} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faBook} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faBaseball} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faChartLine} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faGlobe} />
            </div>
            <div className="portfolio">
                <FontAwesomeIcon className='portfolio-icon' icon={faHandshake} />
            </div>
        </div>
    </section>)
}

Portfolio.propTypes = {
    portfolioRef: PropTypes.func
}

export default Portfolio;