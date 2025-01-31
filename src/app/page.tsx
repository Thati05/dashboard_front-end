import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SkillTest from "@/app/sections/SkillTestContent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <hr className=" opacity-50 "/>
      <div className=" flex " >
       <Sidebar/>
       <SkillTest/>


      </div>
    </div>
  );
}
