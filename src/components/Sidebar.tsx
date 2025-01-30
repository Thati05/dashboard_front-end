import Image from 'next/image'
import React from 'react'
import SkillIcon from '@/assets/skill.png'


export default function Sidebar() {
  return (
    <div className=' pt-16 flex flex-col gap-10 pr-5 h-svh border-r'>
      <div className=' pl-10  items-center flex gap-7'>
        <img className='w-5 object-contain' src='https://img.icons8.com/?size=100&id=8302&format=png&color=000000' alt=''/>
        <span className=' mt-2 text-lg font-bold text-gray-600'>Dashboard</span>
      </div>
      <div className=' items-center rounded-tr-full rounded-br-full flex gap-7 bg-gray-100  py-3 pr-10 pl-8'>
        <Image width={30} className=' object-contain' src={SkillIcon} alt=''/>
        <span className=' mt-2 text-lg font-bold text-blue-500 '>Skill Test</span>
      </div>
      <div className='  pl-10  items-center flex gap-7'>
        <img width={30} className=' object-contain' src='https://img.icons8.com/?size=100&id=82795&format=png&color=000000' alt=''/>
        <span className=' mt-2 text-lg font-bold text-gray-600'>Internship</span>
      </div>
      
    </div>
  )
}