
import NavBar from "./NavBar";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
 
function NavBarContainer({ navItemData, showMenu, setShowMenu }) {
  
  const handleLinkClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`md:h-full ${showMenu ? "h-lvh" : ""} m-2 pb-2 md:overflow-auto`}>
      <div className="flex flex-col gap-2 md:mx-4 h-full">

        <div className="flex flex-col md:text-center hover:cursor-pointer group">
          <span className="text-md font-semibold md:font-medium md:text-xl text-[var(--highlight)] md:text-[var(--text)] group-hover:text-[var(--highlight)] w-auto" 
            onClick={() => {
              handleLinkClick(navItemData[0].ref);
              setShowMenu(false); 
              }} >
            Christheo Guipo
            </span>
          <span className="text-[var(--highlight)] text-[0.6rem] md:text-xs hidden md:inline">
            Software Developer
          </span>
        </div>

        <NavBar className={`flex flex-col h-full border-t-[var(--white10)] border-t-1 md:border-t-0 ${showMenu ? "" : "md:flex hidden z-1000"}`} 
                            navItemData={navItemData} setShowMenu={setShowMenu} /> 

        <div className="flex md:hidden items-center justify-end absolute right-0 top-2" >
          <FontAwesomeIcon className="h-auto w-5 mx-3 p-0" icon={showMenu ? faXmark : faBars} onClick={ () => setShowMenu(prev => !prev)} />
        </div>
 
      </div>
    </div>
  );
}

NavBarContainer.propTypes = {
  navItemData: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.object,
      icon: PropTypes.object,
      title: PropTypes.string,
    })
  ),
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func
};

export default NavBarContainer;
