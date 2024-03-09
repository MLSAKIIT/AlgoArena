import React from 'react'
import { FaFacebook, FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { siteConfig } from "@/constants/siteConfig";

const DashboradSocial = () => {
  return (
    <div className="pt-24 flex flex-col items-center gap-10 md:flex md:flex-row md:justify-between md:mt-24 md:pt-10 z-[200]">
        <div className="mb-4 sm:mb-10 text-white sm:text-3xl text-xl z-10 font-semibold">
          AlgoArena x MLSA
        </div>
        <div className="flex text-[#9747ff] sm:mb-10  mb-10 gap-2">
          <div className="icons  hover:text-white cursor-pointer active:scale-95">
            <a href={siteConfig.socials.gtihub}>
              <FaGithubSquare size={30} />
            </a>
          </div>
          <div className="icons  hover:text-white cursor-pointer active:scale-95">
            <a href={siteConfig.socials.discord}>
              <IoLogoDiscord size={30}></IoLogoDiscord>
            </a>
          </div>
          <div className="icons hover:text-white cursor-pointer active:scale-90">
            <a href={siteConfig.socials.instagram}>
              <FaInstagram size={30}></FaInstagram>
            </a>
          </div>
          <div className="icons hover:text-white cursor-pointer active:scale-95">
            <a href={siteConfig.socials.facebook}>
              <FaFacebook size={30}></FaFacebook>
            </a>
          </div>
        </div>
      </div>
  )
}

export default DashboradSocial