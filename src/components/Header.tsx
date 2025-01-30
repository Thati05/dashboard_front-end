import Image from 'next/image'
import React from 'react'
import WhatBytesLogo from '/public/WhatBytes.svg'
import ProfileHolder from '@/assets/user.png'


export default function Header() {
  return (
    <div className=' px-8 py-5 flex justify-between items-center '>
      <div className=' flex items-center gap-2'>

        <Image width={70} src={WhatBytesLogo} alt='WhatBytes Logo Image'/>
      <span className=' text-2xl font-semibold'>WhatBytes</span>
      </div>

{/*1.Authentication setup 2. Profile edit option */}
      <div className=' border border-opacity-30 px-1 rounded-lg  h-14  flex items-center gap-3'>
      

        <Image className=' h-10 w-10  object-contain rounded-full' src={ProfileHolder} alt=''/>
        
        <span className=' font-bold text-lg'>Seithati Mokoena</span>
      </div>
    </div>
  )
}