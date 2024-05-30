import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({className,id,title,description,titleClassName,imgClassName,img,spareImg})=>(
            <BentoGridItem className={className} key={id} id={id} title={title} description={description} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/>))}
        </BentoGrid>
    </section>
  )
}

export default Grid