import PropTypes from "prop-types";
import ProgressBarItem from "../common/ProgressBarItem/ProgressBarItem";

const codingSkills = [
  { text: "C#", percent: 80 },
  { text: "Vb.Net", percent: 80 },
  { text: "React", percent: 70 },
  { text: "NextJs", percent: 70 },
  { text: "JavaScript", percent: 70 },
  { text: "Asp.Net Core", percent: 65 },
];

const dbSkills = [
  { text: "MSSQL", percent: 80 },
  { text: "PostgreSQL", percent: 60 },
  { text: "MongoDB", percent: 65 },
  { text: "Penpot", percent: 80 },
  { text: "HTML/CSS", percent: 80 },
  { text: "TailwindCSS", percent: 70 },
];

function Skills({ skillsRef }) {
  return (
    <section id="skill" className="md:relative md:h-dvh overflow-hidden bg-linear-to-b from-[#013c57] to-[#101f4c]">
      <div ref={skillsRef} className="scroll-mt-[var(--navbar-height)] invisible md:!visible md:absolute z-10 w-full h-full left-0 top-0 bg-linear-to-b from-[rgba(16,31,76,0)] from-0% to-[#152964] to-70%"></div>
      <img className=" max-w-full w-full object-cover object-center opacity-50 md:opacity-60" src="./images/laptop.webp" />
      <div className="md:absolute md:z-20 w-full h-full left-0 top-0 py-4 md:!py-0 px-[10%] 
      grid grid-rows-[auto_1fr_1fr] md:grid-rows-[60%_auto] grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 justify-items-center text-center">
        <div className="text-center content-end w-full md:col-span-2">
          <span className="text-2xl md:text-3xl font-bold">Skills</span>
          <div className="w-full h-[1px] bg-[var(--white40)] mt-2 md:!my-4"></div>
        </div>
        <div className="w-full md:w-8/12 justify-center">
          <span className="tracking-widest block font-semibold mb-4 text-sm md:text-base">Coding</span>
          {codingSkills.map((skill, index) => (
            <ProgressBarItem key={index} skill={skill} />
          ))}
        </div>
        <div className="w-full md:w-8/12 justify-center">
          <span className="tracking-widest block font-semibold text-sm md:text-base mb-4">Database & Design</span>
          {dbSkills.map((skill, index) => (
            <ProgressBarItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Skills;
