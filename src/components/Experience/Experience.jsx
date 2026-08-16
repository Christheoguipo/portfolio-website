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
  faLanguage,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const experience = [
  {
    date: "Oct 2026 - Onwards",
    title: "Piscine",
    company: "42 Berlin",
    task: "Intensive coding challenge at 42 Berlin, learning C fundamentals through a gamified, peer-to-peer learning methodology.",
    skills: ["C Programming"],
    isWorkExperience: false,
    icon: faCode,
  },
  {
    date: "Nov 2025 - Apr 2026",
    title: "B2 German Language",
    company: "A&Qua GmbH",
    task: "Intensive B2 German language course focused on professional communication.",
    skills: ["German Language"],
    isWorkExperience: false,
    icon: faLanguage,
  },
  {
    date: "Sep 2025 - Dec 2025",
    title: "Full-Stack Circle",
    company: "ReDI School",
    task: "Built and presented full-stack web applications in agile teams using modern frontend and backend technologies.",
    skills: ["TypeScript", "React", "Express", "Prisma", "PostgreSQL", "Git"],
    isWorkExperience: false,
    icon: faCode,
  },
  {
    date: "Jan 2025 - Jun 2025",
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
    task: "Built and supported an in-house system in C# and SQL that helped over 47 branches manage sales, inventory and collections more efficiently.",
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
  return (
    <section
      ref={experienceRef}
      id="experience"
      className="bg-[var(--background)] justify-items-center md:scroll-mt-0 scroll-mt-[var(--navbar-height)]"
    >
      <div className="xl:w-6/12 lg:w-8/12 w-10/12 h-full py-4">
        <span className="text-left text-2xl md:text-3xl font-bold text-black block pb-4">
          Timeline
        </span>
        <VerticalTimeline
          lineColor="var(--secondary)"
          layout="1-column"
          className="p-0 my-0"
        >
          {experience &&
            experience.map((exp, index) => (
              <VerticalTimelineElement
                className={`group`}
                key={index}
                contentStyle={{
                  color: "#000",
                  borderBottom: "solid 0px black",
                  backgroundColor: "var(--background)",
                  borderRadius: "0px",
                  paddingBottom: "0px",
                  paddingTop: "0px",
                  boxShadow: "0 0 0",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  var(--background)",
                }}
                date={
                  <>
                    <div className="text-xs mb-2">{exp.date}</div>
                    <div className="justify-items-end">
                      {exp.skills &&
                        exp.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="inline-flex mr-1 mb-1 py-1 px-2 text-xs bg-[var(--blue10)] rounded-md"
                          >
                            {skill}
                          </div>
                        ))}
                    </div>
                  </>
                }
                iconStyle={{
                  boxShadow: "0px 0px 5px black",
                  background: "var(--background)",
                  color: "var(--accent)",
                }}
                icon={<FontAwesomeIcon icon={exp.icon} />}
                style={{ marginTop: "0px", marginBottom: "1rem" }}
              >
                <span className="relative z-1">
                  <span className="relative font-semibold text-[var(--accent)] md:text-black md:text-xl inline-block transition-all duration-300 group-hover:text-[var(--accent)]">
                    {exp.title}
                  </span>
                </span>

                <span className="block text-xs md:text-sm opacity-80">
                  {exp.company}
                </span>
                <span className="block text-xs my-2 md:text-sm ">
                  {exp.task}
                </span>
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
