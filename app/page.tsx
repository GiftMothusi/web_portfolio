import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex flex-col overflow-hidden justify-center items-center mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[{name:"Home",link:"/",icon:<FaHome/>}]}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
    </div>
   </main>
  );
}
