import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Job Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Commendation card"
            subTitle="Faculty of electrical engineering, mechanical engineering and naval architecture, FESB"
            result="Success"
            des=""
          />    
        </div>
      </div>

      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ADDITIONAL INFORMATIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Driving Licence</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Driving licence"
            subTitle="Autoškola Gabrić Sinj"
            result="AM"
            des=""
          />
          <ResumeCard
            title="Driving licence"
            subTitle="Autoškola Gabrić Sinj"
            result="B"
            des=""
          />                    
        </div>
      </div>
    </motion.div>
  );
}

export default Achievement;
