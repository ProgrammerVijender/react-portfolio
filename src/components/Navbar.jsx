import React from 'react'
import logo from "../data_assets/assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


//border-solid border-8

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-[12.5rem]" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center gap-4 text-2xl ">
            <a href="https://www.linkedin.com/in/vijender-kumar-49526b28a/"><FaLinkedin /> </a>
            <a href="https://github.com/ProgrammerVinit"><FaGithub /> </a>
            <a href="https://www.instagram.com/vijenderkumar_04"><FaInstagram />  </a>
            <a href="#"><FaSquareXTwitter /> </a>
            
        </div>
    </nav>
  )
}

export default Navbar