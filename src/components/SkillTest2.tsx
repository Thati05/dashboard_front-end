import React from 'react'

type SyllabusItem = {
 title:string,
 percentage: number,
 color: string,
 baseColor:string,
 textColor: string

}

export default function SkillTest2() {
  const syllabusItems: SyllabusItem[] = [
    {
    title: "HTML, Tools, Forms, History",
    percentage:80,
    baseColor: "bg-blue-100",
    color:"bg-blue-500",
    textColor: "text-blue-500"
    
    },
    {
      title: "Tags & References in HTML",
      percentage:60,
      baseColor: "bg-orange-100",
      color:"bg-orange-500",
    textColor: "text-orange-500"

    },
    {
      title: "Tales & References in HTML",
      percentage:24,
      baseColor: "bg-red-100",
      color:"bg-red-500",
    textColor: "text-red-500"
    },
    {
      title: "Tables & CSS Basics",
      percentage:96,
      baseColor: "bg-green-100",
      color:"bg-green-500",
    textColor: "text-green-500"
    }
  ]

  return (
    <div className=' border h-fit rounded-lg mt-[76px] p-2 mr-2 '>

    <div className=' w-[400px]  '>
      <h2 className=' font-bold  text-lg mb-4'>Syllabus Wise Analysis </h2>
      <div className=' flex flex-col gap-5'>
        {syllabusItems.map((item, index) => (
          <div  key={index}>
            <div className=' text-gray-500 mb-2 font-semibold text-sm'>{item.title}</div>
            <div className=' flex items-center justify-between gap-5'>

            <div className={`relative h-2 w-full ${item.baseColor} rounded-full overflow-hidden`}>

              <div className={` absolute left-0 top-0 h-full ${item.color} transition-all duration-500 ease-in-out rounded-full`}
              style={{width: `${item.percentage}%`}}
              />
            </div>
            <div 
             className={`${item.textColor} font-semibold`}
            >{item.percentage}%</div>
              </div>
          </div>
        ))}

      </div>
        </div>
    </div>
  )
}