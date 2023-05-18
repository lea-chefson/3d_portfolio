import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, weblink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link2 }) => {
 return (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}>
   <Tilt
   options={{
    max: 45,
    scale:1,
    speed:450,
   }}
   className="green-pink-gradient p-[4px] rounded-[20px] shadow-card shadow-sf_pink"
   >
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full">
    <div className="relative w-full h-[230px]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
      />

      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
        onClick={() => window.open (source_code_link, "_blank")}
        className="black-gradient w-8 h-8 mr-2 rounded-full flex justify-center items-center cursor-pointer shadow-lg shadow-sf_cyan hover:shadow-white hover:invert"
        >
          <img
            src={github}
            alt="github"
            className="w-full object-contain"
          />
        </div>
        <div
        onClick={() => window.open (source_code_link2, "_blank")}
        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
        >
            <img
            src={weblink}
            alt="weblink"
            className="w-full object-contain rounded-full invert shadow-lg shadow-green-500 hover:shadow-white hover:invert-0 hover:bg-white"
          />
        </div>
      </div>
      </div>
    

    <div classNampe="mt-5">
      <h3 className="text-white font-bold text-[24px] pt-2 pb-1">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
          {tag.name}
        </p>
      ))}
    </div>
    </div>
   </Tilt>
  </motion.div>
 )
}

const Works = () => {
  return (
    <>
    <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]">
           Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          <br/>
          <span className="italic font-light text-xs">(Projects' content has been adjusted to meet the confidentiality needs of my clients.)</span>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"");