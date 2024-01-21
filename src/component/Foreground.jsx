import React, { useRef } from 'react';
import Card from '../Card'
const Foreground = () => {
const ref=useRef(null);
   const data=[
    {
      desc:"thsiisdkdkfdjdkfjdjkd rhus thsno to hs why fyour hdit ki note thats why i am  able to do",
      filesize:"1mb",
      close:true,
      tag:{isopen:false,tagTitle:"Downlod Now",tagColor:true},
    },
    {
      desc:"hewy  how are you what is kd kdith no one compare with me kdi to hs why fyour hdit ki note thats why i am  able to do",
      filesize:"3.3mb",
      close:false,
      tag:{isopen:true,tagTitle:"Downlod Now",tagColor:false},
    },
    {
      desc:"hi my name is vijay patel i am from varanasi why fyour hdit ki note thats your hdit ki note thats",
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
