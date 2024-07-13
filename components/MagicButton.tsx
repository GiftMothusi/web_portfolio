import React from 'react'

const MagicButton = ({title,icon,position,handleClick,otherClasses}:{title:string;icon:React.ReactNode;position:string;handleClick?:()=>void;otherClasses?:string}) => {
  return (


    <button  onClick={handleClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-pink-500 bg-[linear-gradient(110deg,#000103,45%,#F9A9D4,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-300">
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg font-medium text-white backdrop-blur-3xl backdrop-opacity-0  gap-2 ${otherClasses}`}>
     {position==='left' && icon}
     {title}
     {position==='right' && icon}
    </span>
  </button>




  )
}

export default MagicButton




