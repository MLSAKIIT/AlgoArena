import Socials from "./Socials";
import Suggestions from "./Suggestions";

const footer = () => {
    return (
        <>
            <div className="bg-[#0F1629] bg-no-repeat bg-cover m-auto max-w-screen-2xl flex flex-col justify-evenly items-center">
                <Suggestions />
                <Socials />
            </div>
        </>
    );
};

export default footer;
