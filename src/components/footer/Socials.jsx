import {IoLogoDiscord} from "react-icons/io5";
import {FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";
import "../../app/globals.css";
import GradientImg from "./GradientImg";

const Socials = () => {
    return (
        <div className="relative flex flex-col bottom-0 sm:flex-row justify-between w-screen items-center box-border mt-24 ">
            <GradientImg />
            <div className="mb-4 sm:mb-10 sm:pl-8 text-white sm:text-3xl text-xl z-10 text-center font-semibold">AlgoArena x MLSA</div>
            <div className="flex text-[#9747ff] sm:mb-10 sm:mr-10 mr-4">
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href="#">
                        <FaGithubSquare size={30} />
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href="#">
                        <IoLogoDiscord size={30}></IoLogoDiscord>
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-90">
                    <a href="#">
                        <FaInstagram size={30}></FaInstagram>
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href="#">
                        <FaFacebook size={30}></FaFacebook>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Socials;