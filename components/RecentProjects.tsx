"use client";
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'
import { FaLocationArrow } from 'react-icons/fa';


const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">A preview of my {" "}
            <span className='text-pink-300'>recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-16 lg:mt-40 md:mt-40 ">
            {projects.map(({id,title,des,img,iconLists,link})=>(
                    <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] items-center justify-center sm:w-[575px] w-[80vw]'>

                            <PinContainer title={link} href={link}>
                                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl' style={{backgroundColor: "#13162D"}}>
                                        <img src="./bg.png" alt="bg_image"/>
                                    </div>
                                    <img src={img} alt="cover_image" className='absolute bottom-0 z-10'/>
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>    

                                <p className='lg:text-xl lg:font-normal text-xs font-light line-clamp-2' 
                                style={{color: "#BEC1DD",margin: "1vh 0",}}>
                                   {des} 
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {
                                            iconLists.map((icon,index)=>(
                                                <div key={index} className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' 
                                                    style={{ transform: `translateX(-${5 * index + 2}px)`}}
                                                >
                                                    <img src={icon} alt="icon5" className='p-2'/>
                                                </div>
                                        ))}
                                    </div>

                                <div className='flex justify-center items-center' onClick={()=>window.open(link,"_blank")}>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-pink-300'>
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className='ms-3' color="#F8B4D9"/>
                                </div>
                            </div>
                            </PinContainer>
                    </div>
                ))}
        </div>  
    </div>
  )
}

export default RecentProjects