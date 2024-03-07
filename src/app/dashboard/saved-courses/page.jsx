import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/ui/Navbar";
import StaredCourse from "@/components/startedCourses/StaredCourse";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <StaredCourse/>
      <Dashboard username="AYUSH RANJAN"></Dashboard>
    </>
  );
}