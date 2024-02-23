import {IoLogoDiscord} from "react-icons/io5";
import {FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";
import "../../app/globals.css";
import GradientImg from "./GradientImg";

const Socials = () => {
    return (
        <div className="relative flex flex-col bottom-0 sm:flex-row justify-between w-full items-center box-border mt-24 ">
            <GradientImg />
            <img className="sm:hidden z-0 w-full h-full" src="footer_ellipse.svg" />
            <div className="mb-4 absolute inset-0 sm:relative top-48 sm:top-0 text-white sm:text-3xl text-2xl z-10 text-center ">AlgoArena x MLSA</div>

            <div className="flex text-[#9747ff] sm:mb-12 m-4">
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
