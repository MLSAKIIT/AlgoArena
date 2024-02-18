import {IoLogoDiscord} from "react-icons/io5";
import {FaGithubSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import "../../app/globals.css";

const socials = () => {
    return (
        <div className="flex text-[#9747ff]">
            <div className="icons mx-2  hover:text-white cursor-pointer active:scale-95">
                <a href="#">
                    <FaGithubSquare size={30} />
                </a>
            </div>
            <div className="icons mx-2  hover:text-white cursor-pointer active:scale-95">
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
    );
};

export default socials;
