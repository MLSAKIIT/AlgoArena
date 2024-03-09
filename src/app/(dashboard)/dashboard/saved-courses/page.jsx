import DashboardStaredCourses from "@/components/startedCourses/DashboardStaredCourses";
import { getSavedLearningPathsWithProgress } from "@/data/dashboard";
import Sidebar from "@/components/sidebar/Sidebar";

export const dynamic = "force-dynamic"

export default async function dashboard() {
  const savedLearningPaths = await getSavedLearningPathsWithProgress();
  return (
    <div className="flex">
      <Sidebar name="Ayush Ranjan"></Sidebar>
      <DashboardStaredCourses data={savedLearningPaths} />
    </div>
  );
}
