import React, { useContext } from 'react';
// import icons
import {ImFacebook, ImPinterest, ImLinkedin} from 'react-icons/im';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import {SiFreelancer, SiUpwork} from 'react-icons/si';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='socialicon hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100089798832086' target='_blank' rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/yolande-bird-51b7b8263/' target='_blank' rel="noreferrer">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href='https://za.pinterest.com/ybirdmultimedia/' target='_blank' rel="noreferrer">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='https://www.freelancer.com/u/ybirdgraphicdes1' target='_blank' rel="noreferrer">
            <SiFreelancer />
          </a>
        </li>
        <li>
          <a href='https://www.upwork.com/freelancers/~01807421441ff37922?viewMode=1' target='_blank' rel="noreferrer">
            <SiUpwork />
          </a>
        </li>
        <li>
          <a href='tel:+27845633795' target='_blank' rel="noreferrer">
            <AiOutlinePhone />
          </a>
        </li>
        <li>
          <a href='mailto:ybirdmultimedia@gmail.com' target='_blank' rel="noreferrer">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
