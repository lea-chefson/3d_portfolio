import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants"; 
import { useEffect, useState } from 'react';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);

    setIsMobile(mediaQuery.matches);

    const handleMediaQuerychange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener(`change`, handleMediaQuerychange);

    return () => {
      mediaQuery.removeEventListener(`change`, handleMediaQuerychange);
    }
   }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
         <div className={`${isMobile ? "invisible absolute" : "opacity-100"} w-28 h-28`} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper (Tech, "")