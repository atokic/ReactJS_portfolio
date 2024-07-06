import React from 'react'
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ante Tokić</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I have recently completed my Master’s in computer science at FESB in Split
        and am currently looking for my first job as developer. My goal is to gain
        experience and knowledge and learn new things and skills. During my
        studies, through various projects, I learned to work independently, but also
        to adapt quickly to teamwork. I always want to learn more and work on my
        improvement.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+385 95 574 9860</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">atokic15@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a className="bannerIcon" href="https://wa.me/+385955749860">
            <FaWhatsapp />
          </a>
          <a className="bannerIcon" href="https://www.linkedin.com/in/ante-tokic/">
            <FaLinkedinIn />
          </a>
          <a className="bannerIcon" href="https://github.com/atokic">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft