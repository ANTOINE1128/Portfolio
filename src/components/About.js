import React from 'react';
import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const About = () => {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });
  return ( 
   <section className='section mt-20' id='about'>
   <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      <motion.div
      variants={fadeIn('right' ,  0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
       className='flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top'>
      </motion.div>
      <motion.div
      variants={fadeIn('left' ,  0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className='flex-1'
      >
        <h2 className='h2 text-accent'>My Tech Palette</h2>
        <h3 className='h3 mb-4'>Front-End: JavaScript, React.js, Redux, Redux Toolkit
Back-End: Ruby, Ruby on Rails, MySQL, Postgres, pgAdmin
 </h3>
        <p className='mb-6'>In the symphony of Full Stack development, I harmonize front-end finesse with back-end mastery, ensuring a seamless and enchanting user experience.

Ready to infuse your projects with a blend of creativity, functionality, and a touch of coding magic? Let's create some digital wonders together.
        </p>
        <div>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {<CountUp start={0} end={2} duration={5}/> }
            
            <div className='font-primary text-sm tracking-[2px]'>
              Years of <br />
              Experience

            </div>
          </div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
              { <CountUp start={0} end={100} duration={6}/> }
            
            <div className='font-primary text-sm tracking-[2px]'>
             + project  <br />
              completed

            </div>
          </div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {<CountUp start={0} end={150} duration={6}/> }
            
            <div className='font-primary text-sm tracking-[2px]'>
               + Satisfied <br />
              clients

            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-x-8 items-center'>
        <button className='btn btn-lg'>Contact Me</button>
        
       <a href='#' className='text-gradient btn-link'>
        My Porfolio
       </a>
     </div>
    </motion.div>
   </div>
  </div>
 </section>
    );
};

export default About;
