import CompletedCourses from "@/components/dashboard/CompletedCourses";
import Sidebar from "@/components/sidebar/Sidebar";

export default function dashboard() {
  return (
    <div className="flex w-screen">
      <Sidebar></Sidebar>
      <div className="md:absolute xl:w-[80%] 2xl:right-28 lg:w-[70%]  md:w-[96%] lg:left-[20%]  mt-20 sm:mt-12">
      <CompletedCourses username="AYUSH RANJAN"></CompletedCourses>
      </div>
    </div>
  );
}