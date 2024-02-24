import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'An Aesthetic Alchemy, I believe in creating not just interfaces but experiences that leave a lasting impression. From user flow to visual elements, I ensure that every interaction is intuitive and visually delightful.   ',
    link: 'learn more',
  },
  {
    name: 'Development',
    description: "For me, development is not just about writing lines of code. it's the art of composing poetry in a programming language. I adhere to clean, efficient, and scalable code practices. Each function and module is a piece, contributing to the whole puzzle of a robust and well-crafted web application.",
    link: 'learn more',
  },
  {
    name: 'Back-End',
    description: 'I build robust and scalable back-end systems using Ruby on Rails framework and PostgreSQL database. With a focus on clean code, security and performance, I develop APIs and integrations that power the front-end.',
    link: 'learn more',
  },
];

const Services = () => {
  // State to manage expanded descriptions
  const [expanded, setExpanded] = useState({});

  // Function to toggle description expansion
  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className='section mb-20' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='lg:flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            {/* For desktop: Side by side */}
            <div className='lg:flex lg:items-center lg:justify-between'>
              <div className='lg:w-1/2'>
                <h2 className='h2 text-accent mb-6'>Experience Crafting Framework</h2>
                <h3 className='h3 max-w-[450px] mb-16'>
                  Welcome to my digital workshop, where ideas are transformed into immersive experiences. This section unveils the essence of how I approach every facet of the development process, from the aesthetic alchemy of UI/UX design to the rhythmic poetry of code in development, all with the purpose in the delivery of the ultimate user experience.
                </h3>
                <button className='btn btn-sm'>See my work</button>
              </div>
              {/* Service items */}
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.3 }}
                className='lg:w-1/2 flex flex-col gap-8'>
                {services.map((service, index) => {
                  const { name, description, link } = service;
                  const isExpanded = expanded[index];

                  return (
                    <div key={index} className='border-b border-white/20 pb-8'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-2'>{name}</h4>
                      <p className='font-secondary leading-tight mb-4'>
                        {isExpanded ? description : `${description.split('. ')[0]}.`}
                        {!isExpanded && (
                          <button className='text-gradient text-sm flex-1' onClick={() => toggleExpand(index)}>
                            {link}
                          </button>
                        )}
                      </p>
                      {isExpanded && (
                        <button className='text-gradient text-sm flex-1' onClick={() => toggleExpand(index)}>
                          Show Less 
                        </button>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
