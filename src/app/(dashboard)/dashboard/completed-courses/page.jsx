import CompletedCourses from "@/components/dashboard/CompletedCourses";
import Sidebar from "@/components/sidebar/Sidebar";
import { getCompletedLearningPaths } from "@/data/dashboard";

export const dynamic = "force-dynamic"

export default async function dashboard() {
  const data = await getCompletedLearningPaths()
  return (
    <div className="flex w-screen">
      <Sidebar/>
      <div className="md:absolute xl:w-[80%] lg:w-[70%]  md:w-[96%] lg:left-[20%] 2xl:left-[14%] mt-20 sm:mt-12">
      <CompletedCourses data={data}></CompletedCourses>
      </div>
    </div>
  );
}