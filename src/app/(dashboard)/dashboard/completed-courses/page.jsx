import CompletedCourses from "@/components/dashboard/CompletedCourses";
import Sidebar from "@/components/sidebar/Sidebar";

export default function dashboard() {
  return (
    <div className="flex w-screen">
      <Sidebar></Sidebar>
      <div className="md:absolute md:w-75% right-10 mt-20 sm:mt-12">
      <CompletedCourses username="AYUSH RANJAN"></CompletedCourses>
      </div>
    </div>
  );
}