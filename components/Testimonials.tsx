import React from 'react'
import {InfiniteCards} from "./ui/InfiniteCards";
import { testimonials } from '@/data';

const Testimonials = () => {
  return (
    <div  className='py-20' id="testimonials">
        <h1 className='heading'>Kind Words {' '}
            <span className='text-pink-300'>from Clients</span>
        </h1>
        <div className='flex flex-col items-center justify-center'>
            <InfiniteCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />

        </div>
    </div>
  )
}

export default Testimonials