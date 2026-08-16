import ContactIcons from "../common/ContactIcons/ContactIcons";
import Logo from "../common/Logo/Logo";
import NavListItem from "./NavListItem";

import PropTypes from "prop-types";

function NavBar({ navItemData, className, setShowMenu }) {
  const handleLinkClick = ref => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <div className={`${className}`}>
      <div className="md:mt-4 pt-4">
        <div className="flex flex-col gap-2">
          {navItemData &&
            navItemData.map((item, index) => (
              <NavListItem
                key={index}
                item={item}
                handleClick={() => handleLinkClick(item.ref)}
              />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:items-center md:justify-end h-full mt-4 md:ml-0 ml-2">
        <Logo size="smNoMargin" classname={"mb-4 md:block hidden"} />
        <span className="md:text-sm text-xs text-[var(--highlight)]">
          Find me @
        </span>
        <ContactIcons />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  navItemData: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.object,
      icon: PropTypes.object,
      title: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func,
};

export default NavBar;
