import Socials from "./Socials";
import Suggestions from "./Suggestions";

const footer = () => {
    return (
        <div className="bg-[#0F1629] bg-no-repeat bg-cover h-screen w-screen m-0 p-0 flex flex-col justify-evenly">
            <Suggestions />
            <div className="flex flex-col absolute bottom-0 sm:flex-row  justify-between w-full items-center box-border p-6">
                <div className="mb-4 sm:mb-0 text-white sm:text-3xl text-2xl px-4 text-center">AlgoArena x MLSA</div>
                <Socials />
            </div>
        </div>
    );
};

export default footer;
