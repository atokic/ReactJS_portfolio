import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Junior Developer.", "Web Developer.", "Software Developer.", "Freelancer.", "Front-End Developer.", "Web Designer.", "Tech Enthusiast.", "React Developer." ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ante Tokić</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#C8FF01"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a dedicated and versatile developer with a passion for continuous learning and improvement. As a junior and freelance developer, I have a solid foundation in web and software development, with a particular love for front-end technologies and web design. I strive to create intuitive and engaging user experiences and stay updated with the latest trends, especially in React. My enthusiasm for technology drives me to explore and learn new skills, ensuring I bring innovative and effective solutions to every project.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner