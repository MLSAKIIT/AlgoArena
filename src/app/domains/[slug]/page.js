import LearningPath from "@/components/learningPath/LearningPath";
import Navbar from "@/components/ui/Navbar";
import Socials from "@/components/footer/Socials";



export default function page({params}){

    const id=params.slug;

    return (
        <div>
            <Navbar/>
            <LearningPath slugId={id}/> 
            <div className="overflow-hidden bottom-0">
            <Socials/>
            </div>
            
        </div>
    )
}