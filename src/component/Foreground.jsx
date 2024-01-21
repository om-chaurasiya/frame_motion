import React, { useRef } from 'react';
import Card from '../Card'
const Foreground = () => {
const ref=useRef(null);
   const data=[
    {
      desc:"Hii my name is om prakash chaurasiya I am a frontend developer and I am very passionate about react js and I love compititve programming",
      filesize:"1mb",
      close:true,
      tag:{isopen:false,tagTitle:"Downlod Now",tagColor:true},
    },
    {
      desc:"If you people want to know about me more pls visit my resume there you will find my achivements as well",
      filesize:"3.3mb",
      close:false,
      tag:{isopen:true,tagTitle:"Downlod Now",tagColor:false},
    },
    {
      desc:"This is just a peace of work that i have done during my internship at Basket hunt ,it is a ecommerce websites where i have contibuted by making these cards",
      filesize:".9mb",
      close:true,
      tag:{isopen:true,tagTitle:"Downlod Now",tagColor:true},
    },
   ]
  return (
   <>
    <div ref={ref} className='fixed z-10 w-full h-screen bg-slate-400/10 flex-wrap flex gap-3'>
     { data.map((item,i)=>(
        <Card data={item} reference={ref}></Card>
      )
      )}
    </div>
   </>
  )
}

export default Foreground;
