import Link from 'next/link'
import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'
import { HiOutlinePhone } from "react-icons/hi2";


function AddFirst() {
  return (
    <div className='bg-slate-800  py-3'>
        <div className="container flex justify-between items-center">

            <div className="Social">
                <SocialLinks />
            </div>

            <div className="NUMBER ">
            
                <Link className='text-green-400 flex items-center gap-1 text-[10px] xs:text-[14px] ' href={"https://wa.me/+201070095665"} target='_blank' >
                  <span className="flex items-center gap-2">
                  <HiOutlinePhone />
                  <span className="">+201070095665</span>
                    </span>
                    
                  <span className="text-white">HOTLINE</span>
                </Link>
                
            </div>

        </div>

    </div>
  )
}

export default AddFirst