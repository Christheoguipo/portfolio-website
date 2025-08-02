import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../common/Logo/Logo";
import NavListItem from "./NavListItem";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

function NavBar({ navItemData }) {

  const [ref, visible] = useInView({ rootMargin: "0px", threshold: 0, triggerOnce: true });

  const handleLinkClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref} className={`bg-[#222] sticky w-full top-0 z-100 lg:!pt-0 lg:!px-0 transition-all duration-800 ease-in-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
      <div className="relative grid grid-cols-[auto_1fr_auto] min-h-[var(--navbar-height)] w-full h-full">
        <Logo size="sm" />
        <div className="flex flex-col justify-center text-xs md:text-[clamp(1rem,1.3rem,1.5rem)] ">
          <span>Christheo Guipo</span>
          <span className="text-[var(--text-accent)] text-[0.5rem] md:text-[clamp(0.6rem,0.8rem,1rem)]">
            Software Developer
          </span>
        </div>

        <div className="h-full">
          <div className="hidden md:flex items-center justify-end h-full">
            {navItemData &&
              navItemData.map((item, index) => (
                <NavListItem
                  key={index}
                  icon={item.icon}
                  handleClick={() => handleLinkClick(item.ref)}
                />
              ))}
          </div>
          <div className="flex md:hidden items-center justify-end h-full ">
            <Popover>
              {({ close }) => (
                <>
                  <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold outline-0">
                    <FontAwesomeIcon
                      className="h-auto w-5 px-3"
                      icon={faBars}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    transition
                    className="absolute right-0 top-10 z-1000 flex w-screen max-w-fit bg-transparent transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-in data-leave:duration-150 data-leave:ease-in"
                  >
                    <div className="flex-auto bg-[#222]">
                      {navItemData &&
                        navItemData.map((item, index) => (
                          <div key={index} className="flex py-4">
                            <NavListItem
                              icon={item.icon}
                              handleClick={() => {
                                handleLinkClick(item.ref);
                                close();
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>
        </div>
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
};

export default NavBar;
