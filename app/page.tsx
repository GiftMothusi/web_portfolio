import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex flex-col overflow-hidden justify-center items-center mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Testimonials/>
      <Experience/>
    </div>
   </main>
  );
}
