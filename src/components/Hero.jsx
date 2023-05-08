import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} pt-[120px] inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full green-pink-gradient" from-green to-pink/>
          <div className="w-1 sm:h-80 h-40 pink-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="bg-gradient-to-r text-transparent bg-clip-text from-cyber-green to-cyber-pink">Lea Girier</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Web Developer / Front-end Developer / Graphic Designer <br className="sm:block hidden"/><span className='font-thin italic'>Creating beautiful and engaging web experiences.</span>
          </p>
        </div>
      </div>
      <div className=" border border-red-500 w-3/4 h-1/3 m-auto ">
      <Spline style={{"width":"300px"}} scene="https://prod.spline.design/Tv5EaVhFDBrIjpAV/scene.splinecode" />
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
             animate={{
              y:[0,24,0]
              }}
             transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType:'loop',
             }}
             className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero