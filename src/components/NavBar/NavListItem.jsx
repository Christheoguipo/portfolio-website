import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

function NavListItem({ item, handleClick }) {
 
    return (

        <div className="flex py-2 pl-2 md:px-1 rounded-md transition-colors duration-300 cursor-pointer hover:text-black hover:bg-[var(--highlight)]" onClick={handleClick}>
            <FontAwesomeIcon
                className="h-auto md:w-5 w-4 py-0 pl-1 pr-3 transition-all duration-300"
                icon={item.icon}
            />
            <span className="md:text-sm text-xs">{item.title}</span>
        </div>

    );
}

NavListItem.propTypes = {
    item: PropTypes.object,
    handleClick: PropTypes.func
}

export default NavListItem;