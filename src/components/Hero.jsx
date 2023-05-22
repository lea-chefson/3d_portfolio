import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import rotate from"../../src/assets/rotate.png"

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const canvas = document.getElementById('your-canvas-id');

    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
            Web Developer / Front-end Developer / Graphic Designer <br className="sm:block hidden"/><span className='font-normal xs:text-2xl text-lg italic'>Creating beautiful and engaging web experiences.</span>
          </p>
        </div>
      </div>
    <ComputersCanvas/>
    {isHovered && <div className="absolute  text-sf_cyan top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-[40%]  animate-pulse">
        <img src={rotate} className="w-24 h-24 brightness-200"/>
      </div>}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
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