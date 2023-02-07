import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { ImPinterest } from 'react-icons/im';
import { SiFreelancer, SiUpwork } from 'react-icons/si';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import '../index.css';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='mobile xl:hidden'>
      {/* Mobile Nav Toggle Button */}
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='mobile shadow-2xl w-screen absolute top-0 right-0 max-w-xs h-screen z-20'>

        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-19 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center pt-10 pb-10 gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li className='mt-12'>

          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/work'>Work</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <a href='https://www.facebook.com/profile.php?id=100089798832086' className='socialbutton' target='_blank' rel="noreferrer">
              <FaFacebook />
            </a>
            <a href='https://za.pinterest.com/ybirdmultimedia/' className='socialbutton' target='_blank' rel="noreferrer">
              <ImPinterest />
            </a>
            <a href='https://www.linkedin.com/in/yolande-bird-51b7b8263/' className='socialbutton' target='_blank' rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href='mailto:ybirdmultimedia@gmail.com' className='socialbutton' target='_blank' rel="noreferrer">
              <HiOutlineMail />
            </a>
          </li>
          <li>
            <a href='tel:+27845633795' className='socialbutton' target='_blank' rel="noreferrer">
              <AiOutlinePhone />
            </a>
            <a href='https://www.freelancer.com/u/ybirdgraphicdes1' className='socialbutton' target='_blank' rel="noreferrer">
              <SiFreelancer />
            </a>
            <a href='https://www.upwork.com/freelancers/~01807421441ff37922?viewMode=1' className='socialbutton' target='_blank' rel="noreferrer">
              <SiUpwork />
            </a>
          </li>
          <li className='pt-11'>

          </li>
        </ul>
      </motion.div>
    </nav>
  )
};

export default MobileNav;