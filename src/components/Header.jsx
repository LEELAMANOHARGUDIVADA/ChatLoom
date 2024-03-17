import { SignInButton, UserButton } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";
import logo from "../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function useScroll() {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBorder(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showBorder;
}

const Header = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const showBorder = useScroll();
  const [menuIsClicked, setMenuIsClicked] = useState(false);
 
  const menuHandler = () => {
    setMenuIsClicked(!menuIsClicked); 
  }

  return (
    <>
      <header className={`sticky top-0 z-20 w-full h-20 flex items-center justify-around bg-[#222831] ${showBorder ? 'shadow-md' : ''}`}>
        <Link to='/' className='h-16 flex items-center justify-center cursor-pointer'>
          <img src={logo} alt="logo" className='w-40 md:w-60 ' />
        </Link>

        
        
        <div className='ml-32 md:ml-0' >
        {isSignedIn ? (
          <UserButton afterSignOutUrl='/' />
        ) : (
          <Link to='/sign-in'>
            <button className='btn px-4 md:px-10 py-2 rounded-full text-white text-sm' >Get Started</button>
          </Link>
        )}
        </div>
        
        {/* <div className='md:hidden'>
          <CiMenuFries size={25} className='text-white cursor-pointer focus:scale-90' onClick={menuHandler} />
        </div>

        <div className={`md:hidden fixed top-0 right-0 h-screen bg-white w-80 shadow-lg transform transition-transform duration-300 ${menuIsClicked ? 'translate-x-0' : 'translate-x-full'}`}>
          <IoMdClose size={25} className='cursor-pointer absolute top-4 right-4' onClick={menuHandler} />
          <div className='flex flex-col items-center justify-center gap-10 h-full'>
            <Link to='/create-meeting'><span className='text-lg text-gray-800 my-4'>Create a Meeting</span></Link>
            <Link to='/join-meeting'><span className='text-lg text-gray-800 my-4'>Join a Meeting</span></Link>
            
              {
                !isSignedIn && (
                  <Link to='/sign-in'>
                <button className='btn px-4 md:px-10 py-2 rounded-full text-white text-sm my-4' onClick={menuHandler}>Sign In</button>
              </Link>
                )
              }
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Header;
