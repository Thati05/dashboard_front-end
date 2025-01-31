import Image from 'next/image'
import React from 'react'
import SkillIcon from '@/assets/skill.png'


export default function Sidebar() {
  return (
    <div className=' pt-16 flex flex-col max-md:w-20 gap-10 pr-5 h-svh border-r max-md:border-none'>
      <div className=' pl-10  items-center flex gap-4'>
        <img className='w-5 object-contain' src='https://img.icons8.com/?size=100&id=8302&format=png&color=000000' alt=''/>
        <span className=' mt-2 text-[16px] font-bold text-gray-600 max-md:hidden'>Dashboard</span>
      </div>
      <div className=' items-center rounded-tr-full rounded-br-full flex gap-4 bg-gray-100 max-md:w-[80px]  py-3 w-[200px]  pl-8'>
        <Image width={30} className=' object-contain' src={SkillIcon} alt=''/>
        <span className=' mt-2 text-[16px] font-bold text-blue-500 max-md:hidden '>Skill Test</span>
      </div>
      <div className='  pl-10  items-center flex gap-4'>
        <img width={30} className=' object-contain' src='https://img.icons8.com/?size=100&id=82795&format=png&color=000000' alt=''/>
        <span className=' mt-2 text-[16px] font-bold text-gray-600 max-md:hidden'>Internship</span>
      </div>
      
    </div>
  )
}