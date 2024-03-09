import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/ui/Navbar";
import { getAllLearningPathsWithProgress } from "@/data/dashboard";

export default async function dashboard() {
  const data = await getAllLearningPathsWithProgress()
  const currentlyWatchingLearningPaths = data.filter((learningPath) => learningPath.progress < 100);
  const completedLearningPaths = data.filter((learningPath) => learningPath.progress === 100);
  return (
    <div className="flex ">
      <Sidebar></Sidebar>
      <div className="lg:absolute overflow-hidden xl:w-[80%] 2xl:right-12  lg:w-[70%] sm:right-10 mt-16 sm:mt-12">
      <Dashboard data={currentlyWatchingLearningPaths} />
      </div>
    </div>
  );
}
