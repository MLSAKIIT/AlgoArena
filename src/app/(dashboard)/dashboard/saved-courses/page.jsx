import DashboardStaredCourses from "@/components/startedCourses/DashboardStaredCourses";
import { getSavedLearningPathsWithProgress } from "@/data/dashboard";
import Sidebar from "@/components/sidebar/Sidebar";

export const dynamic = "force-dynamic";

export default async function dashboard() {
  const savedLearningPaths = await getSavedLearningPathsWithProgress();
  return (
    <div className="min-h-[100vh]">
      <div className="flex gap-3 max-w-7xl mx-auto ">
        <Sidebar />
        <div className="md:absolute lg:left-[20%] lg:w-9/12 2xl:left-[22%] mt-20 w-screen overflow-hidden">
          <DashboardStaredCourses data={savedLearningPaths} />
        </div>
      </div>
    </div>
  );
}
