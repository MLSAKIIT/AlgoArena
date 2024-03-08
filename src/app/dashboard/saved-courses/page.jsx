import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/ui/Navbar";
import StaredCourse from "@/components/startedCourses/StaredCourse";
import DashboardSavedCourses from "@/components/startedCourses/DashboardSavedCourses";

export default function dashboard() {
  return (
    <>
      <Navbar />
      {/* <StaredCourse /> */}
      <DashboardSavedCourses username="AYUSH RANJAN"/>
      {/* <Dashboard username="AYUSH RANJAN"></Dashboard> */}
    </>
  );
}
