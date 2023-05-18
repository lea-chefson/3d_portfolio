import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full green-pink-gradient" from-green to-pink/>
          <div className="w-1 sm:h-80 h-40 pink-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="bg-gradient-to-r text-transparent bg-clip-text from-cyber-green to-cyber-pink whitespace-pre"> Lea Girier</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Web Developer / Front-end Developer / Graphic Designer <br className="sm:block hidden"/><span className='font-normal text-2xl italic'>Creating beautiful and engaging web experiences.</span>
          </p>
        </div>
      </div>
    <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
            <motion.div
             animate={{
              y:[0,24,0]
              }}
             transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType:'loop',
             }}
             className="w-3 h-3 rounded-full bg-black mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero