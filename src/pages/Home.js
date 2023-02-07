import React from 'react';
// import link
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div name='home' className='home w-full h-screen bg-[black]'>
      <div className='pt-10'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-pink-600 text-4xl sm:text-7xl font-bold inline border-b-4 border-pink-600'>Yolande Bird</h1>
        <h2 className='text-yellow-300 text-3xl sm:text-5xl'>Multimedia Designer</h2>
        <p className='text-orange-500 text-2xl py-4 max-w-[700]'>I am an entry level multimedia Freelancer practitioner with a BA degree in Computer Generated Multimedia from UNISA. I am passionate about the creative process on all levels and being creative. I am very good at time management and adhere to any deadlines given to me. I have very good communication skills and will be able to include the client in every part of the creative process of the work. I am also very good at problem solving and can come up with innovative solutions to the clients’ questions or requests. I am a very good listener and will listen to the clients’ needs and then translate that into a workable strategy, which will fit the clients’ requirements. I work with Adobe Photoshop. My skills include storyboarding, digital drawings, acrylic paintings, pencil drawings, mixed media, flyers, business cards and manipulation of images in Photoshop.</p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group text-2xl border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View My Work 
              <span>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
            </Link>
        </div>
      </div>
      </div>
      <div className='footer w-full h-75px text-align-center mt-5300px'>
        <h2>Copyright &copy; 2023</h2>
    </div>
    </div>
  );
};

export default Home;
