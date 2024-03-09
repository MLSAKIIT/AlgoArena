import CompletedCourses from "@/components/dashboard/CompletedCourses";
import Sidebar from "@/components/sidebar/Sidebar";

export default function dashboard() {
  return (
    <div className="flex">
      <Sidebar name="Ayush Ranjan"></Sidebar>
      <div className="absolute md:w-70% right-0">
      <CompletedCourses username="AYUSH RANJAN"></CompletedCourses>
      </div>
    </div>
  );
}