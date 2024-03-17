import React, { useEffect } from 'react'
import Header from '../components/Header'
import video from '../assets/images/animation.mp4'
import img2 from '../assets/images/image2.jpg'
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import features from '../assets/data/features'
import Footer from '../components/Footer'
import { useUser } from "@clerk/clerk-react";


const Home = () => {

  const { isSignedIn, user, isLoaded } = useUser();

 
  return (
    <>
    <Header />
    <div className='w-full flex flex-col items-center justify-center gap-5 mt-36'>
      <div className='w-full flex flex-col items-center justify-center gap-2 md:gap-4'>
        <h2 className='text-white text-2xl md:text-5xl font-bold'>Free Online Meeting</h2>
        <h2 className='text-white text-2xl md:text-5xl font-bold'>Platform For <span className='text-sky-500 text-2xl md:text-5xl font-bold'>Everyone</span></h2>
      </div>
      <div className=' w-[300px] md:w-[750px] flex flex-col  items-center justify-center'>
        <p className='text-sm md:text-lg text-white'>Nowadays you can collaborate with people all over the world, use our product for </p>
        <p className='text-sm md:text-lg text-white'>a feature-rich collaboration experience and it's also free!</p>
      </div>
      {isSignedIn  ?  (
        <Link to='/create-meeting'>
        <button className='btn px-10 py-2 rounded-full text-white text-sm'>Create a Meeting</button>
        </Link>
      ) : (
        <Link to='/sign-in'>
      <button className='btn px-10 py-2 rounded-full text-white text-sm'>Get Started</button>
      </Link>
      ) }
    </div>
    <div className='mt-20 w-full flex flex-col items-center justify-center '>
      <div className='w-2/3' >
      <video src={video} autoPlay muted loop className='rounded-2xl' />
      </div>
    </div>

    <div className='mt-16 w-full px-10 md:px-40 '>
    <div className='w-full flex items-center justify-center'>
      <h3 className='text-white text-lg font-semibold'>Trusted by 1000+ businesses</h3>
    </div>
    <Slider />
  </div>
    <div className='mt-20 w-full flex flex-col md:flex-row items-center justify-around  md:px-20'>
      <div className='w-2/3 md:w-1/2 flex flex-col items-center justify-center gap-3'>
        <h3 className='text-white text-2xl md:text-3xl font-semibold'>Seamless Video Conferencing</h3>
        <h3 className='text-white text-2xl md:text-3xl font-semibold'>Elevate Your Virtual Collaboration with <span className='text-sky-500 text-3xl md:text-4xl font-semibold'>ChatLoom</span></h3>
        <p className='text-white text-lg leading-10 text-center mt-5'>Transform your virtual meetings into productive collaborations with ChatLoom. Our platform provides an immersive environment for teams to connect, share ideas, and achieve goals together.</p>
      </div>
      
      <img src={img2} alt="image" className=' w-2/3 mt-10 md:mt-0 md:w-1/3 rounded-2xl' />

    </div>

    <div className='my-20 w-full flex flex-col items-center justify-center'>
      <div className='mb-16 px-20 md:px-40'>
        <h3 className='text-white text-3xl font-semibold'>Unlock the Power of <span className='text-sky-500 text-4xl font-bold'>ChatLoom</span>: Explore Our <span className='text-sky-500 text-4xl font-bold'>Exciting</span> Features!</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 gap-x-20 gap-y-10'>
        {
          features.map((item) => (
              <div className=" py-5 w-52  bg-blue-50 rounded-lg border-2 hover:scale-95 flex items-center justify-center gap-5 cursor-pointer" key={item.id}>
          <img src={item.img_url} alt={item.name} className='w-8' />
          <h3 className='text-md font-medium text-slate-800'>{item.name}</h3>
        </div>
          ))
        }
        
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Home