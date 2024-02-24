import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
// import images
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
 return (
  <section className='section mt-5' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
            variants={fadeIn('left' ,  0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
         className='flex-1 flex flex-col gap-y-4 mb-10 lg:mb-0'>
          {/* {text} */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              MY Latest <br />
            Work.
            </h2>
            <p className='max-w-sm mb-16'>You are invited to explore my digital Canvas. Have a look at my past endeavors, where every project tells a unique story of innovation and problem-solving. From intuitive user interfaces that beckon exploration to robust back-end architectures that power seamless functionality, each piece in my portfolio reflects a commitment to excellence. I look forward in creating even more complicated and impactful digital magic. In for the challenge? 
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* {image} */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overlay} */}
           <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div> 
           {/* {img} */}
           <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
           {/* {pretitle} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><spam className='text-gradient'>Full Stack Project</spam>
           </div>
           {/* {TITILE} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>BookADoctor</span>
            <a href='https://book-doctor-appointment-frontend.netlify.app/signup'
            className='btn btn-sm btn-accent mb-2 ml-12'>
   Live Demo
  </a> 
            </div>
          </div>
        </motion.div>
        <motion.div 
            variants={fadeIn('right' ,  0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* {image} */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overlay} */}
           <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div> 
           {/* {img} */}
           <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
           {/* {pretitle} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><spam className='text-gradient'>React/Redux project</spam>
           </div>
           {/* {TITILE} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50' >
            <span className='text-3xl text-white'>Space Traveller</span> 
                   <a href='https://space-travelers-hub-q37f.onrender.com/' className='btn btn-sm btn-accent mb-2 ml-12 '>
   Live Demo
  </a> 
            </div>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overlay} */}
           <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div> 
           {/* {img} */}
           <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
           {/* {pretitle} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><spam className='text-gradient'>Javascript project</spam>
           </div>
           {/* {TITILE} */}
           <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>MovieMagnet</span>
            <a href='https://65d8c496c4acfb2293856936--willowy-salmiakki-5f8ffc.netlify.app/' className='btn btn-sm btn-accent mb-2 ml-12'>
   Live Demo
  </a> 
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
