import { workExperience } from '@/data'
import {Button} from "./ui/MovingBorder"
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="py-20" id="experience">
        <h1 className='heading'>My {" "} <span className='text-pink-300'>Work Experience</span></h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map(({id,title,company_name,desc,date,className,thumbnail})=>(
                <Button key={id} className='flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800' style={{background:"rgb(4,7,29)", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",borderRadius:"calc(1.75rem*0.96)"}}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={thumbnail} alt="company_thumbnail" className='lg:w-32 md:w-20 w-16 h-16'/>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>{title}</h1>
                            <h2 className='text-start text-xs md:text-sm font-semibold'>{company_name}</h2>
                            <h3 className='text-start font-light'>{date}</h3>
                            <p className='text-start text-white-300 mt-3 font-semibold'>{desc}</p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience