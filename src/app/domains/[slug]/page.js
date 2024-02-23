import LearningPath from "@/components/learningPath/learningPath";


export default function page({params}){

    const id=params.slug;

    return (
        <div>
            <LearningPath slugId={id}/>   
        </div>
    )
}