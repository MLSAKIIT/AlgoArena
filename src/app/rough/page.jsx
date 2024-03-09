import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/ui/Navbar";
import { getAllLearningPathsWithProgress } from "@/data/dashboard";

export default async function dashboard() {
  const data = await getAllLearningPathsWithProgress()
  const currentlyWatchingLearningPaths = data.filter((learningPath) => learningPath.progress < 100);
  const completedLearningPaths = data.filter((learningPath) => learningPath.progress === 100);
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Dashboard data={currentlyWatchingLearningPaths} />
    </div>
  );
}