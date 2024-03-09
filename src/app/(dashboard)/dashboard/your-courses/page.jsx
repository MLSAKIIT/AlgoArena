import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/sidebar/Sidebar";
import { getAllLearningPathsWithProgress } from "@/data/dashboard";

export const dynamic = "force-dynamic"

export default async function dashboard() {
  const data = await getAllLearningPathsWithProgress()
  const currentlyWatchingLearningPaths = data.filter((learningPath) => learningPath.progress < 100);
  return (
    <div className="flex ">
      <Sidebar name="Ayush Ranjan"></Sidebar>
      <Dashboard data={currentlyWatchingLearningPaths} />
    </div>
  );
}
