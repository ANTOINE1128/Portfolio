import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const About = () => {
  // voli
  return ( 
   <section className='section' id='about'>
   <div className='container mx-auto'>
    <div>
      <div className='flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top'>
      </div>
      <div>
        <h2>About Me .</h2>
        <h3>I'm a Full stack developer. Front-end javascript react.js redux redux-tool-kit, Back-end ruby , RubyOnRails , Mysql, Postgres , pgAdmin </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae eius quas neque.
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
    
    </div>
   </div>
  </div>
  </section>
    );
};

export default About;
