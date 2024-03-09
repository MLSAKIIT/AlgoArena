import {IoLogoDiscord} from "react-icons/io5";
import {FaGithubSquare, FaInstagram, FaFacebook} from "react-icons/fa";
import "../../app/globals.css";
import GradientImg from "./GradientImg";
import { siteConfig } from "@/constants/siteConfig";

const Socials = () => {
    return (
        <div className="relative flex flex-col max-w-[120rem] bottom-0 sm:flex-row justify-between w-screen items-center box-border mt-24 ">
            <GradientImg />
            <div className="mb-4 sm:mb-10 sm:pl-8 text-white sm:text-3xl text-xl -z-10 text-center font-semibold">AlgoArena x MLSA</div>
            <div className="flex text-[#9747ff] sm:mb-10 sm:mr-10 mr-4 mb-10">
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href={siteConfig.socials.github}>
                        <FaGithubSquare size={30} />
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href={siteConfig.socials.discord}>
                        <IoLogoDiscord size={30}></IoLogoDiscord>
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-90">
                    <a href={siteConfig.socials.instagram}>
                        <FaInstagram size={30}></FaInstagram>
                    </a>
                </div>
                <div className="icons mx-2 hover:text-white cursor-pointer active:scale-95">
                    <a href={siteConfig.socials.facebook}>
                        <FaFacebook size={30}></FaFacebook>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Socials;