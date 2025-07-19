import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

function NavListItem({ icon, handleClick }) {
    return (
 
        <div className="flex h-full content-center py-0 px-1 transition-colors duration-300 cursor-pointer hover:bg-[var(--text-accent)]" onClick={handleClick}>
            <FontAwesomeIcon
                className="h-auto w-5 py-0 px-3 hover:text-black hover:scale-125 transition-all duration-500"
                icon={icon}
            />
        </div>

    );
}

NavListItem.propTypes = {
    icon: PropTypes.object,
    handleClick: PropTypes.func
}

export default NavListItem;