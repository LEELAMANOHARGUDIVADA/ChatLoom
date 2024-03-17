import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa"
import { Fade } from 'react-reveal';


const Footer = () => {
  return (
    <div className='border-t border-slate-500'>
        <Fade right duration={1500}>
        <div className='md:h-32 flex flex-col md:flex-row items-center justify-evenly'>
            <div>
                <img src={logo} alt="logo" className='w-60' />
            </div>
            <div className='flex items-center justify-center gap-10'>
                <div className='btn px-3 py-3 rounded-full cursor-pointer'>
                    <FaFacebook size={20} className='text-white' />
                </div>
                <div className='btn px-3 py-3 rounded-full cursor-pointer'>
                    <FaInstagram size={20} className='text-white' />
                </div>
                <div className='btn px-3 py-3 rounded-full cursor-pointer'>
                    <FaXTwitter size={20} className='text-white' />
                </div>
                <div className='btn px-3 py-3 rounded-full cursor-pointer'>
                    <FaYoutube size={20} className='text-white' />
                </div>
            </div>
            <div className='mt-10 md:mt-0'>
                
                <p className='text-sm text-slate-300'>Copyright&copy; 2024 - ChatLoom | All Rights Reserved </p>
                
            </div>
        </div>
        </Fade>
        <div className='text-center my-5'>
            <Fade top duration={1500}>
            <h2 className='text-white'>Developed by Leela Manohar Gudivada</h2>
            </Fade>
        </div>
    </div>
  )
}

export default Footer