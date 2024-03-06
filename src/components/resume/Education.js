import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computing - mag. ing. comp."
            subTitle="FESB (10/2020 - 09/2022)"
            result="4.50/5.00"
            des="Final grade: 5 | Type of credits: ECTS | Number of credits: 121 | Thesis: Detection of small objects in aerial photographs using YOLO detector"
          />
          <ResumeCard
            title="Vocational Bachelor in Computing - bacc. ing. comp."
            subTitle="FESB (10/2016 - 07/2019)"
            result="4.35/5.00"
            des="Final grade: 5 | Type of credits: ECTS | Number of credits: 180 | Thesis: Web service for dynamic video streaming"
          />          
          <ResumeCard
            title="High school student"
            subTitle="High school Dinko Šimunović (09/2011 - 06/2015)"
            result="4.88/5.00"
            des=""
          />    
          <ResumeCard
            title="Pupil"
            subTitle="Elementary school Marko Marulić Sinj (09/2003 - 06/2011)"
            result="5.00/5.00"
            des=""
          />    
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">MOTHER LANGUAGE: CROATIAN</p>
          <h2 className="text-3xl md:text-4xl font-bold">Language skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="English: Listening"
            subTitle=""
            result="B2"
            des=""
          />
          <ResumeCard
            title="English: Reading"
            subTitle=""
            result="B2"
            des=""
          />
          <ResumeCard
            title="English: Spoken production"
            subTitle=""
            result="B2"
            des=""
          />
          <ResumeCard
            title="English: Spoken interaction"
            subTitle=""
            result="B2"
            des=""
          />
          <ResumeCard
            title="English: Writing"
            subTitle=""
            result="B2"
            des=""
          />                    
        </div>
      </div>
    </motion.div>
  );
}

export default Education