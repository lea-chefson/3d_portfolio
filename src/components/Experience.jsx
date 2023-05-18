import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
  <VerticalTimelineElement
   contentStyle= {{   borderWidth: "6px",
    borderImage: "linear-gradient(to bottom, #0CC8AE, #579CD0, #B766FB) 1", background: "#1d1836", color:"black"}}
   contentArrowStyle={{borderRight: "10px solid #232631"}}
   date={experience.date}
   iconStyle={{background: experience.iconBg, boxShadow: "0px 0px 0px 5px #B766FB"}}
   icon={
    <div className="flex justify-center items-center w-full h-full rounded-full">
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[100%] h-[100%]  bg-black rounded-full"
      />
    </div>
   }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
        key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)}


const Experience = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#aaa6c3">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper (Experience, "work")