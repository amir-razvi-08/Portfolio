import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

import {useSelector} from 'react-redux';
function Footer() {

  const darkMode=useSelector((state)=>state.darkMode);
  return (
    <div className={`flex justify-center mt-12 border-t-2 border-neutral-600 ${darkMode?"text-white/70":"text-black/80"}`}>

        <div className='my-12 flex items-center tracking-tighter'>Copyright <FaRegCopyright className='mx-1 text-sm'/>2024 Amir Razvi. All Rights Reserved.</div>
        </div>
  )
}

export default Footer