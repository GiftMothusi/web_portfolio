"use client";
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'


const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className='heading'>A preview of my {" "}
            <span className='text-pink-300'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map(({id,title,des,img,iconLists,link})=>(
                    <div key={id} className='lg:min-h-[32.5rem] h-[25rem] items-center justify-center sm:w-96 w-[80vw]'>

                            <PinContainer >
                                <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl' style={{backgroundColor: "#13162D"}}>
                                        <img src="./bg.png" alt="bg_image"/>
                                    </div>
                                    <img src={img} alt="cover_image" className='absolute bottom-0 z-10'/>
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>    

                                <p className='' style={{}}>
                                   {des} 
                                </p>

                            </PinContainer>
                    </div>
                ))
            }
        </div>

        
         
    </div>
  )
}

export default RecentProjects