import DashboardStaredCourses from "@/components/startedCourses/DashboardStaredCourses";
import { getSavedLearningPathsWithProgress } from "@/data/dashboard";
import Sidebar from "@/components/sidebar/Sidebar";

export const dynamic = "force-dynamic"

export default async function dashboard() {
  const savedLearningPaths = await getSavedLearningPathsWithProgress();
  return (
    <div className="flex gap-3 max-w-7xl">
      <Sidebar></Sidebar>
      <div className="md:absolute mx-4 lg:ml-0 lg:left-[20%] lg:w-9/12 2xl:left-[22%] mt-16">
      <DashboardStaredCourses data={savedLearningPaths} />
      </div>
    </div>
  );
}
