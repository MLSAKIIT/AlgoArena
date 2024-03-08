import YourCourses from "@/components/dashboard/CompletedCourses";
import Navbar from "@/components/ui/Navbar";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <YourCourses username="AYUSH RANJAN"></YourCourses>
    </>
  );
}