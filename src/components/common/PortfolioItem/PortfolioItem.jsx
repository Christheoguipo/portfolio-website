import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

const delayMap = ["group-hover:delay-200", "group-hover:delay-75"];

function PortfolioItem({ data }) {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div onClick={() => setIsClicked(prev => !prev)} className="group block h-68 w-68 2xl:h-80 2xl:w-80 bg-[var(--white40)] text-black shadow-[1px_1px_10px_black] border-0 rounded-xs transition-all duration-300 content-center text-center">
      <div className="relative overflow-hidden h-full w-full">
        <div className="h-full w-full content-center">
          <img className="text-[var(--secondary)] transition-all duration-500 ease-in-out group-hover:scale-150" src={data.img} />
        </div>
        <div className={`absolute w-full h-full top-0 left-0 hover:!opacity-90 md:opacity-0 ${isClicked ? "opacity-90" : "opacity-0"} transition-all duration-500 bg-black text-[var(--text)] p-3
        grid grid-rows-[1fr_3fr_2fr]`}>
          <span className="block text-xl mb-2">{data.title}</span>

          <p className="block content-start text-left text-xs pt-1 ">
            {data.description}
          </p>
          <div className="max-w-full w-full">
            <div className="flex justify-start gap-3 mb-2">
              {data.buttons && data.buttons.length > 0 ? (
                <>
                  {data.buttons.map((button, index) => (
                    <a key={index} href={button.link} target="_blank" rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={`text-[var(--text)] transition-all duration-300 group-hover:translate-x-0 ${isClicked ? "translate-x-0" : "-translate-x-100"} md:-translate-x-100 hover:delay-0 ${delayMap[index]} hover:text-[var(--text-accent)] hover:scale-150 hover:cursor-pointer`}
                        icon={button.icon}
                      />
                    </a>
                  ))}
                </>
              ) : (
                <span className="text-xs">(This app is private)</span>
              )}
            </div>
            <div className="flex flex-wrap justify-start content-end gap-1">
              {data.skills.length > 0 &&
                data.skills.map((skill, index) => (
                  <div key={index} className="py-1 px-1 text-xs bg-[var(--secondary)] rounded-md text-white">
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.object,
      link: PropTypes.string
    })),
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PortfolioItem;
