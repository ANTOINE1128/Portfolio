import React from 'react';
import {BsArrowBarRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

//data services
const services =[
  {
    name: 'UI/UX Design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates culpa eaque exercitationem temporibus modi rem repellat officiis debitis cupiditate.',
    link: 'learn more',
  },
  {
    name: 'development',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates culpa eaque exercitationem temporibus modi rem repellat officiis debitis cupiditate.',
    link: 'learn more',
  },
  {
    name: 'UI/UX Design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates culpa eaque exercitationem temporibus modi rem repellat officiis debitis cupiditate.',
    link: 'learn more',
  },
];
const Services = () => {
  return ( 
  <section className='section mt-20' id='services'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row '>

      <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>What I Do.</h2>
        <h3 className='h3 max-w-[450px] mb-16'>I am full stack Software Developper with 2 years experience.
        </h3>
        <button className='btn btn-sm'>see my work</button>
        {/* #services */}
  
        {/* #services list */}

   <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 flex-wrap justify-between'>
   {services.map((service, index) =>{
    const { name,description,link} = service;
    return (
    <div className='border-b border-white/20 h-[140px] mb-[38px] flex' key={index}>
      <div className='max-w-[476px]'>
        <h4 className='text-[20px] tracking-wider font-primary font-semi'>{name}</h4>
        <p>{description}</p>
      </div>
      <div className='flex flex-col flex-1 items-end'>
        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
          <BsArrowBarRight />
        </a>
        <a href='#' className='text-gradient text-sm '>{link}</a>
      </div>
    </div>
    );
  })}
       </div>
      </div>
    </div>
  </div>
  </section>
  );
};

export default Services;
