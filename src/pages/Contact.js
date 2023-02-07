import React from 'react';
// import images
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import {ImPinterest} from 'react-icons/im';
import {SiFreelancer, SiUpwork} from 'react-icons/si';

const Contact = () => {

    return (
        <div>
            <div>
                <div className='hidden md:flex fixed flex-col top-[15%] left-0'>
                    <ul className='text-white'>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                            <a className='flex justify-between items-center w-full' href='https://www.facebook.com/profile.php?id=100089798832086' target='_blank' rel='noreferrer'>
                                <p></p>Facebook <FaFacebook size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                            <a className='flex justify-between items-center w-full' href='https://www.freelancer.com/u/ybirdgraphicdes1' target='_blank' rel='noreferrer'>
                                <p></p>Freelancer <SiFreelancer size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                            <a className='flex justify-between items-center w-full' href='https://www.upwork.com/freelancers/~01807421441ff37922?viewMode=1' target='_blank' rel='noreferrer'>
                                <p></p>UpWork <SiUpwork size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                            <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/yolande-bird-51b7b8263/' target='_blank' rel='noreferrer'>
                                <p></p>LinkedIn <FaLinkedin size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-400'>
                            <a className='flex justify-between items-center w-full' href='https://za.pinterest.com/ybirdmultimedia/' target='_blank' rel='noreferrer'>
                                <p></p>Pinterest <ImPinterest size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-500'>
                            <a className='flex justify-between items-center w-full' href='tel:+27845633795' target='_blank' rel='noreferrer'>
                                <p></p>Phone <AiOutlinePhone size={35} /><p></p>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                            <a className='flex justify-between items-center w-full' href='mailto:ybirdmultimedia@gmail.com' target='_blank' rel='noreferrer'>
                                <p></p>Email <HiOutlineMail size={35} /><p></p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div name='contact' className='contact flex items-center justify-center mx-auto'>
                    <form action="https://getform.io/f/6f14abe7-0cbb-48c7-9943-bb8004ceab53" method='POST' className='form flex flex-col max-w-[600px] w-full'>
                        <div className='pb-8'>
                            <p className='text-7xl font-bold inline border-b-4 border-pink-600 text-pink-500'>Contact</p>
                            <p className='text-white py-4'>Submit the form below or use the buttons on the left to contact me:</p>
                        </div>
                        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                        <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email' />
                        <textarea className='bg-[#ccd6f6] my-4 p-2' name='message' rows="10" placeholder='Message'></textarea>
                        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='contact-footer'>
                <h2>Copyright &copy; 2023</h2>
            </div>
        </div>
    );
};

export default Contact;
