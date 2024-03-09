import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/sidebar/Sidebar";
import { getAllLearningPathsWithProgress } from "@/data/dashboard";

export const dynamic = "force-dynamic"

export default async function dashboard() {
  const data = await getAllLearningPathsWithProgress()
  const currentlyWatchingLearningPaths = data.filter((learningPath) => learningPath.progress < 100);
  return (
    <div className="flex overflow-hidden ">
      <Sidebar></Sidebar>
      <div className="md:absolute xl:w-[80%] md:w-[96%] lg:left-[24%] xl:left-[20%] 2xl:left-[20%] mt-20 sm:mt-12">
      <Dashboard data={currentlyWatchingLearningPaths} />
      </div>
    </div>
  );
}
