import React from 'react'
import Image from 'next/image'

import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-0 min-h-96'>
            <Image src='./footer-grid.svg' alt='footer_grid' width={100} height={100}  className='w-full h-full opacity-80'/>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Interested in creating beautiful responsive  <span className='text-pink-300'> {" "}Web Applications{" "}</span>reach out now to email below. </h1>
            <p className=" text-white-200 md:mt-10 my-5 text-center">Reach out to me today:</p>
            <a href="mailto:giftgabanakgosi@gmail.com " className='items-center justify-center'>
            <MagicButton title="Get in touch" icon={<FaLocationArrow/>} position='right'/>
        </a>
       </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light pb-10'> Copyright &copy; 2024</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    
                <div key={profile.id} className='w-10 h-10 flex cursor-pointer justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 border border-black-300 rounded-lg'>   
                    <Image src={profile.img} alt="social_media_icon" width={20} height={20} className=""/>
                </div>
            ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer