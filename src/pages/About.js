import React from 'react';
// import image
import YolandeBird from '../assets/about/yolande-bird.webp';

const About = () => {
  return (
    <section className='about section bg-black'>
      <div className='about-empty'></div>
        <div name='about' className='w-full h-screen bg-[black] text-white'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm-text-right pb-8 pl-4'>
                <p className='text-pink-600 text-4xl text-right sm:text-7xl font-bold inline border-b-4 border-pink-600'>About</p>
              </div>
              <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <img id='yolandebird' className='w-20 mx-auto' src={YolandeBird} alt="Yolande Bird" />
              </div>
              <div>
                <p className='text-white'>I am an entry level multimedia Freelancer practitioner with a BA degree in Computer Generated Multimedia from UNISA. I am passionate about the creative process on all levels and being creative. I am very good at time management and adhere to any deadlines given to me. I have very good communication skills and will be able to include the client in every part of the creative process of the work. I am also very good at problem solving and can come up with innovative solutions to the clients’ questions or requests. I am a very good listener and will listen to the clients’ needs and then translate that into a workable strategy, which will fit the clients’ requirements. I work with Adobe Photoshop. My skills include storyboarding, digital drawings, acrylic paintings, pencil drawings, mixed media, flyers, business cards and manipulation of images in Photoshop.</p>
              </div>
            </div>
          </div>
          <div className='about-empty'></div>
          <div className='about-footer w-full h-75px text-align-center mt-5300px'>
            <h2>Copyright &copy; 2023</h2>
          </div>
        </div>
    </section>
  );
};

export default About;
