import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
const Card = ({data,reference}) => {
  return (
 <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.2 }} className='h-64 w-48 bg-zinc-600 rounded-[25px] text-white py-6 px-5 relative overflow-hidden'>
    <FaFileAlt />
    <p className='text-sm leading-tight font-semibold mt-5'>{data.desc}</p>
    <div className='absolute bottom-0 left-0 h-30 w-full py-3'>
        <div className='text-white flex items-center justify-between px-4 mb-[5vw]'>
        <h5>{data.filesize}</h5>
        <span className='bg-green-600 flex items-center justify-center rounded-full h-6 w-6'>
        {data.close?<IoClose />:<FaDownload />}
        </span>
        </div>
        {data.tag.isopen && (
  <div className={`w-full h-10 ${data.tag.tagColor? "bg-green-600" : "bg-red-800"} bottom-0 flex absolute justify-center py-2`}>
    {data.tag.tagTitle}
  </div>
)}
</div>
</motion.div>
  );
}
export default Card;
