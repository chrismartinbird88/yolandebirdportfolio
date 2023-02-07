import React from 'react'
import Animation from '../assets/skills/animation.webp';
import BusinessCard from '../assets/skills/business-card.webp';
import DigitalArt from '../assets/skills/digital-art.webp';
import Drawing from '../assets/skills/drawing.webp';
import Flyers from '../assets/skills/flyers.webp';
import MixedMedia from '../assets/skills/mixed-media.webp';
import Photography from '../assets/skills/photography.webp';
import Planning from '../assets/skills/planning.webp';
import Scripts from '../assets/skills/scripts.webp';
import StoryBoard from '../assets/skills/storyboard.webp';
import Videos from '../assets/skills/videos.webp';

// import links

import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-black text-white'>
            <div className='skills flex flex-col justify-center items-center w-full h-full mx-auto max-w-[1000px]'>
                <div className='items-left sm-text-left pb-8 pl-4'>
                    <p className='text-pink-600 text-4xl text-right sm:text-7xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the skills I posess:</p>
                </div>
                <div className='skills-grid w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#storyboard-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={StoryBoard} alt="StoryBoards icon" />
                            <p className='my-4'>StoryBoards</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#animation-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={Animation} alt="Animation icon" />
                            <p className='my-4'>Animation</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#business-cards-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={BusinessCard} alt="Business Card icon" />
                            <p className='my-4'>Business Cards</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#digital-art-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={DigitalArt} alt="DigitalArt icon" />
                            <p className='my-4'>Digital Art</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#drawings-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={Drawing} alt="Drawing icon" />
                            <p className='my-4'>Drawings</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#flyers-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={Flyers} alt="Flyers icon" />
                            <p className='my-4'>Flyers</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#mixed-media-art-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={MixedMedia} alt="Mixed Media icon" />
                            <p className='my-4'>Mixed Media</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#photograph-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={Photography} alt="Photography icon" />
                            <p className='my-4'>Photography</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>

                        <Link to={"/work/#planning-work"} className='is expanded' target='_blank'>
                            <img className='w-20 mx-auto' src={Planning} alt="Planning icon" />
                            <p className='my-4'>Planning</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#scripts-work"} className='is expanded' target='_blank'>
                            <img className='w-20 mx-auto' src={Scripts} alt="Scripts icon" />
                            <p className='my-4'>Scripts</p>
                        </Link>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-125 duration-500'>
                        <Link to={"/work/#videos-work"} target='_blank'>
                            <img className='w-20 mx-auto' src={Videos} alt="Videos icon" />
                            <p className='my-4'>Videos</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='footer w-full h-75px text-align-center'>
                <h2>Copyright &copy; 2023</h2>
            </div>
        </div>
    )
}

export default Skills
