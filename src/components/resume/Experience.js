import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="Company - (03/07/2023 - Present)"
            result="Split, Croatia"
            des=""
          />
          <ResumeCard
            title="Apprentice web developer"
            subTitle="Human Resources Cloud d.o.o. - (03/2019 - 06/2019)"
            result="Split, Croatia"
            des="Getting to know and studying the C# programming language and the .NET environment, followed by the study of the Angular framework, in order to ultimately be able to create a quality project that will include all segments of creating a Web application ( .NET environment, Microsoft SQL, and the Angular framework)."
          />          
          <ResumeCard
            title="Security guard"
            subTitle="Patronus Primus d.o.o. - (2015 - 2019)"
            result="Sinj, Croatia"
            des="Student work as a security guard at various concerts, music and sports events."
          />    
          <ResumeCard
            title="Volunteer firefighter"
            subTitle="DVD Sinj - (2014 - 2015)"
            result="Sinj, Croatia"
            des="Volunteer fire brigade on duty during the summer."
          />    
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience From Companies</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web developer & IT"
            subTitle="Bazenska tehnika Dicmo - (08/2020 - Present)"
            result="Dicmo, Croatia"
            des=""
          />
          <ResumeCard
            title="Web developer & designer"
            subTitle="Estetika dekorativni kamen - (07/2018 - Present)"
            result="Lučane, Croatia"
            des=""
          />                    
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
