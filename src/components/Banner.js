import React from 'react';
import Image from '../assets/avatar.svg';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {TypeAnimation} from  'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const Banner = () => {
  return (
<section className='min-h-[85vh] lg:min-h-[76vh]' id='home'>
 <div className="container mx-auto ">
  <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
    <div className='flex-1 text-center font-secondary lg:text-left'>  
     <motion.h1
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
      Antoine <span>Makdessy</span>
    </motion.h1>
        <motion.div
         variants={fadeIn('up', 0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
         className='mb-8 text-[40px] font-secondary font-semibold uppercase leadin-[1]'>
          <span className=' text-white mr-4 mt-2'>I am a </span>
          <TypeAnimation sequence={[
            'Full Stack',2000,'Web Developer',2000
          ]}
          speed={50} 
          className="text-accent"
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
        <motion.p 
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='mb-8 max-w-lg mx-auto text-[28px]'>
         Hello Tech Enthusiasts!<br />

Thanks for visiting my small realm of Software Development. Based in Lebanon, I bring over 2 years of hands-on experience in Full Stack Development.  I've embarked on a career shift fueled by an unconditional passion for coding. I look forward to joining an organization that shares the same passion. My goal in life is to create something that would have an ultimate impact. Wanna join me in this mission?
          </motion.p>
        <motion.div
         variants={fadeIn('up', 0.6)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>
          <button className='btn btn-lg'>Contact Me</button>
          <a href='#' className='text-gradient btn-link'>
            My Portfolio
          </a>
        </motion.div>
        <motion.div
         variants={fadeIn('up', 0.7)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='flex text-[30px] gap-x-6 max-w-max mx-auto lg;mx-0'>
          <a href="https://github.com/ANTOINE1128">
            <FaGithub />
          </a>
          <a href="mailto:makdessyantoine@gmail.com">
            <FaEnvelope/>
          </a>
          <a href="https://www.linkedin.com/in/antoine-makdessy/">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
      <motion.div
       variants={fadeIn('down', 0.8)}
       initial='hidden'
       whileInView={'show'}
      className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
        <img src={Image} alt="" />
        </motion.div> 
    </div>
   </div>
  </section>
  );
};

export default Banner;
