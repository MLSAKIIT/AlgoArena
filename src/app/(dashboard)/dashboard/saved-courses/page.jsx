import Navbar from "@/components/ui/Navbar";
import StaredCourse from "@/components/startedCourses/StaredCourse";
import DashboardStaredCourses from "@/components/startedCourses/DashboardStaredCourses";
import { getAllLearningPathsWithProgress, getSavedLearningPathsWithProgress } from "@/data/dashboard";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function dashboard() {
  const data = await getAllLearningPathsWithProgress()
  const currentlyWatchingLearningPaths = data.filter((learningPath) => learningPath.progress < 100);
  const savedLearningPaths = await getSavedLearningPathsWithProgress();
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <DashboardStaredCourses data={savedLearningPaths} />
    </div>
  );
}
