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
      <Sidebar name="Ayush Ranjan"></Sidebar>
      <Dashboard data={currentlyWatchingLearningPaths} />
    </div>
  );
}
