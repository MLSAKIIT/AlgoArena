<<<<<<< HEAD
import Domains from "@/components/dashboard/DashBoardDomains";

const page = () => {
    return(
        <Domains />
    );
};

export default page;
 
=======
import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/ui/Navbar";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <Dashboard username="AYUSH RANJAN"></Dashboard>
    </>
  );
}
>>>>>>> upstream/main
