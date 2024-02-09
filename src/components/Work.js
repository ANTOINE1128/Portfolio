import React from 'react';
import {motion} from 'framer-motion'
import { Variant } from '../variants';
// import images
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
 return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div>
        <div>
          {/* {text} */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              MY Latest <br />
            Work.
            </h2>
            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ex fuga sequi veritatis maxime dolores est, totam nemo neque, ducimus perferendis culpa consectetur quisquam dolor suscipit expedita autem provident ipsum.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* {image} */}
          <div>
            {/* {overlay} */}
           <div></div> 
           {/* {img} */}
           <img src="" alt="" />
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  </section>
  );
};

export default Work;
