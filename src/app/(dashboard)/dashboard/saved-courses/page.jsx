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
    <div className="flex gap-3 max-w-7xl">
      <Sidebar></Sidebar>
      <div className="md:absolute mx-4 lg:ml-0 lg:left-[20%] lg:w-9/12 2xl:left-[22%] mt-16">
      <DashboardStaredCourses data={savedLearningPaths} />
      </div>
    </div>
  );
}
