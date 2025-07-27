import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

function ProgressBarItem({ skill }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= skill.percent) {
          clearInterval(timer);
          return skill.percent;
        }
        return prev + 1;
      });
    }, 5);
    return () => clearInterval(timer);
  }, [skill.percent]);

  return (
    <ProgressBar
      style={{ width: "100%", marginBottom: "0.8rem" }}
      now={value}
      label={
        <div className="flex justify-between w-full px-2">
          <span className="inline-block">{skill.text}</span>
          <span className="inline-block">{value}%</span>
        </div>
      }
    ></ProgressBar>
  );
}

ProgressBarItem.propTypes = {
  skill: PropTypes.object,
};

export default ProgressBarItem;
