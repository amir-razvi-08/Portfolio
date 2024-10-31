import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

import {useSelector} from 'react-redux';
function Footer() {

  const darkMode=useSelector((state)=>state.darkMode);
  return (
    <div className={`flex justify-center mt-12 border-t-2 border-neutral-600 ${darkMode?"text-white":"text-black"}`}>

        <div className='my-12 flex items-center'>COPYRIGHT <FaRegCopyright className='mx-2 text-sm'/>2025 - Amir Razvi</div>
        </div>
  )
}

export default Footer