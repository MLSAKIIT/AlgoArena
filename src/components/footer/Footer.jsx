import Socials from "./Socials";
import Suggestions from "./Suggestions";

const footer = () => {
    return (
        <div className="bg-[#0F1629] bg-no-repeat bg-cover flex flex-col justify-evenly items-center w-full 2xl:ml-0 2xl:mb-0 ">
            <Suggestions />
            <Socials />
        </div>
    );
};

export default footer;
