import React from 'react'
import {InfiniteCards} from "./ui/InfiniteCards";
import { companies, testimonials } from '@/data';

const Testimonials = () => {
  return (
    <div  className='py-20
    ' id="testimonials">
        <h1 className='heading'>Kind Words {' '}
            <span className='text-pink-300'>from Clients</span>
        </h1>
        <div className='flex flex-col items-center justify-center lg:mt-10'>            
            <InfiniteCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id,name,img,nameImg})=>(
                    
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt="name" className='md:w-10 w-5'/>
                        <img src={nameImg} alt="name" className='md:w-24 w-20'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials