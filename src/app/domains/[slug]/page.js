import LearningPath from "@/components/learningPath/LearningPath";


export default function page({params}){

    const id=params.slug;

    return (
        <div>
            <LearningPath slugId={id}/>   
        </div>
    )
}