import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SkillTest1 from "@/components/SkillTest1";
import SkillTest2 from "@/components/SkillTest2";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <hr className=" opacity-50 "/>
      <div className=" flex w-full  " >
       <Sidebar/>
       <div className=" flex w-full max-md:flex-col ">
        <SkillTest1 RankNum={0} PercentileNum={0} CurrentScore={0}/>
        <SkillTest2/>

       
       </div>


      </div>
    </div>
  );
}
