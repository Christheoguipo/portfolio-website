import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PropTypes from "prop-types";
import {
  faBriefcase,
  faGraduationCap,
  faRocket,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const experience = [
  {
    date: "Jan 2025 - Present",
    title: "Software Developer",
    company: "FuturePoint IT Solutions (Unpaid collaboration)",
    task: "Working on an internal employee portal with Next.js, where staff can track dashboards, apply for leave and manage their records.",
    skills: ["Next.js", "MSSQL", "React", "HTML", "TailwindCSS"],
    isWorkExperience: true,
    icon: faBriefcase,
  },
  {
    date: "Sep 2020 - Dec 2024",
    title: "Relocation, Integration and Training",
    company: "Berlin, Germany",
    task: "Relocated to Germany, completed a full-stack web dev program and deepened my skills in modern tools like React, Node.js, C# and ASP.NET Core through hands-on courses and projects.",
    skills: [
      "C#",
      "ASP.NET Core",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Angular",
    ],
    isWorkExperience: false,
    icon: faPlaneDeparture,
  },
  {
    date: "Aug 2015 - Aug 2020",
    title: "Software Developer",
    company: "Brigada Mass Media Corporation",
    task: "Built and supported an in-house system in C# and SQL that helped 47+ branches manage sales, inventory and collections more efficiently.",
    skills: ["C#", "WinForms", "MSSQL", "TFS", "Crystal Report"],
    isWorkExperience: true,
    icon: faBriefcase,
  },
  {
    date: "Sep 2013 - Jul 2015",
    title: "Software Developer",
    company: "ICEG Systems Inc.",
    task: "Built and maintained Accounting, HR and Payroll system modules using VB.NET, DevExpress and SQL, while supporting users through training.",
    skills: ["VB.Net", "WinForms", "MSSQL", "DevExpress"],
    isWorkExperience: true,
    icon: faBriefcase,
  },
  {
    date: "Oct 2012 - Aug 2013",
    title: "Software Developer",
    company: "Dole Philippines Inc.",
    task: "Developed and tested production system modules in ILE RPG and helped users get comfortable with the new tools through training.",
    skills: ["ILE RPG", "AS400"],
    isWorkExperience: true,
    icon: faBriefcase,
  },
  {
    date: "Jul 2011 - Sep 2012",
    title: "Data Center Operator",
    company: "Dole Philippines Inc.",
    task: "Handled basic user support, monitored servers and performed regular backups and updates to keep systems running smoothly.",
    skills: ["Server Monitoring", "Backup", "Basic IT Support", "AS400", "DB2"],
    isWorkExperience: true,
    icon: faBriefcase,
  },
  {
    date: "Jun 2007 - Mar 2011",
    title: "BSc Computer Science",
    company: "Notre Dame of Dadiangas University, Philippines",
    task: "",
    skills: ["SDLC", "Turbo Pascal", "VB"],
    isWorkExperience: false,
    icon: faGraduationCap,
  },
];

function Experience({ experienceRef }) {

  const [isMobile, setIsMobile] = useState(false);

  useInView({ triggerOnce: true, rootMargin: "0px" })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= "768") {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="scroll-mt-[var(--navbar-height)]"
    >
      <div className="h-full bg-[#e0e0e0] py-8 justify-center justify-items-center">
        <span className="text-2xl md:text-3xl font-bold text-black my-4 block text-center">
          Experience and Education
        </span>
        <VerticalTimeline
          animate={!isMobile}
          lineColor="var(--secondary)">
          {experience &&
            experience.map((exp, index) => (
              <VerticalTimelineElement
                className={`group`}
                key={index}
                contentStyle={{
                  backgroundColor: "var(--blue10)",
                  color: "#000",
                }}
                contentArrowStyle={{ borderRight: "7px solid  var(--blue10)" }}
                date={exp.date}
                iconStyle={{
                  boxShadow: "0px 0px 5px black",
                  background: exp.isWorkExperience
                    ? "var(--accent)"
                    : "var(--blue)",
                  color: "var(--text)",
                }}
                icon={<FontAwesomeIcon icon={exp.icon} />}
              >
                <span className="relative z-1">
                  <span className="relative font-semibold text-[var(--accent)] md:text-black md:text-xl inline-block transition-all duration-300 group-hover:text-[var(--accent)]">
                    {exp.title}
                  </span>
                  <span className="group-hover:h-12/12 group-hover:bg-[var(--accent)] group-hover:!opacity-0 absolute -z-1 md:bottom-0 left-0 opacity-60 bg-[var(--accent)] w-[calc(100%+0.5rem)] md:h-1 transition-all duration-300"></span>
                </span>
                <span className="block text-xs md:text-sm opacity-80">
                  {exp.company}
                </span>
                <span className="block text-xs md:text-sm my-2">
                  {exp.task}
                </span>
                <div>
                  {exp.skills &&
                    exp.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex m-1 py-1 px-2 text-xs md:text-sm bg-[var(--blue10)] rounded-md"
                      >
                        {skill}
                      </div>
                    ))}
                </div>
              </VerticalTimelineElement>
            ))}

          <VerticalTimelineElement
            iconStyle={{
              background: "var(--secondary)",
              color: "#fff",
            }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

Experience.propTypes = {
  experienceRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Experience;
