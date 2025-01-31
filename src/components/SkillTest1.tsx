"use client"

import Image from "next/image"
import { Trophy, FileText, CheckCircle } from "lucide-react"
import HTMLIcon from '@/assets/html-5.png'
import { useState } from "react"
import Graph from "./Graph"

type Props = {
 RankNum:number,
 PercentileNum: number, //Must be between 0-100
CurrentScore:number


}

export default function SkillTest1({RankNum, PercentileNum, CurrentScore}:Props) {
 //Managing the component's state 
 //Creating state variables 

 const [rank, setRank] = useState(RankNum)
  const [percentile, setPercentile] = useState(PercentileNum)
  const [score, setScore] = useState(CurrentScore)

  //Setting the visibility of the form
  const [isFormVisible, setisFormVisible] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log("Submitted:",{rank,percentile,score})
  setisFormVisible(false)

  }

  return (
    
    <section className=" max-w-3xl p-6">
      <h2 className=" mb-6 text-lg text-gray-500">Skill Test</h2>
      
        <div className="flex items-center rounded-lg border bg-white p-6  justify-between mb-6">
          <div className="flex items-center gap-4">
            <Image
              src={HTMLIcon}
              alt="HTML5 Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h2 className="font-semibold text-lg">Hyper Text Markup Language</h2>
              <p className="text-sm text-muted-foreground">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>
          <button 
          onClick={() => setisFormVisible(true)}
          
          className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1e3a8a]/90">Update</button>
          
        </div>
{/* Form that will be displayed after the update button is clicked on */}
{isFormVisible && (
<div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

  <div className=" bg-white shadow-lg rounded-lg p-10 max-w-xl w-full">


  
  <form onSubmit={handleSubmit}>
            <p className=" font-bold mb-10 ">Update score</p>


            <div className=" flex flex-col gap-10">

            <div className=" flex items-center justify-between">
              <label htmlFor="rank" className=" flex items-center gap-2">

              <span className=" flex items-center justify-center h-6 w-6 rounded-full bg-[#1e3a8a]  text-lg text-white">1</span>
              <p>Update your <span className=" font-bold">Rank</span></p>
              </label>
              <input
              id="rank"
              required
              className=" border p-2 rounded"
              type="number"
              value={rank}
              onChange={(e) => setRank(Number(e.target.value))}
              placeholder="Enter rank"
              
              
              
              
              
              
              
              />
            </div>

            <div className=" flex items-center justify-between">
              <label className=" flex items-center gap-2">

              <span className=" flex items-center justify-center h-6 w-6 rounded-full bg-[#1e3a8a]  text-lg text-white">2</span>
              <p>Update your <span className=" font-bold">Percentile</span></p>
              </label>
              <input
              id="percentile"
              type="numder"
              onChange={(e) => setPercentile(Number(e.target.value))}
              value={percentile}
              placeholder="Enter percentile"
              required
              className=" border p-2 rounded"
              min={0}
              max={100}
              
              
              />
            </div>

            <div className=" flex items-center justify-between">
              <label className=" flex items-center gap-2">

              <span className=" flex items-center justify-center h-6 w-6 rounded-full bg-[#1e3a8a] text-lg text-white">3</span>
              <p>Update your <span className=" font-bold">Current Score (out of 15)</span></p>
              </label>
              <input
              required
              type="number"
              onChange={(e) => setScore(Number(e.target.value))}
              value={score}
              className=" border p-2 rounded"
              id="score"
              placeholder=" Enter score"
              min={0}
              max={15}
              
              />
            </div>


            </div>
            <div className=" flex justify-end mt-10  gap-10">
              <button
             type="button"
             onClick={() => setisFormVisible(false)}

              
              
              className=" border  px-4 py-2 rounded-md text-sm">Cancel</button>
              <button 
              type="submit"
              className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1e3a8a]/90">Save</button>
            </div>

          </form>
  </div>
</div>
        )
       
}

        <div className="mt-6  items-center rounded-lg border bg-white p-6 pr-3  justify-between">
          <h3 className="text-sm font-bold mb-4">Quick Statistics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center border-r gap-2">
              <div className=" p-3 bg-gray-100 rounded-full">
                
              <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <div className="font-semibold">{rank}</div>
                <div className="text-xs text-gray-400 ">YOUR RANK</div>
              </div>
            </div>
            <div className="flex border-r  items-center gap-2">
            <div className=" p-3 bg-gray-100 rounded-full">
              <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <div className="font-semibold">{percentile}%</div>
                <div className="text-xs  text-gray-400 ">PERCENTILE</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <div className=" p-3 bg-gray-100 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <div className="font-semibold">{`${score}/15`}</div>
                <div className="text-xs  text-gray-400 ">CORRECT ANSWERS</div>
              </div>
            </div>
          </div>
        </div>

<div className=" pt-10">

        <Graph percentile={percentile} />
</div>
    
    </section>
  )
}

