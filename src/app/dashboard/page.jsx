import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/ui/Navbar";

export default function dashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Dashboard username="AYUSH RANJAN"></Dashboard>
    </div>
  );
}
