import React from 'react'
import Title from '../layouts/Title'
import { 
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
  project29,
  project30,
  project31,
  project32,
  project33,
  project34,
  project35,
  project36,
  project37,
  project38,
  project39,
  project40,
  project41
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Dynamic video stream"
          des="Technology: Node.js"
          src={project1}
          github_link="https://github.com/atokic/Web-service-for-dynamic-video-streaming"

        />
        <ProjectsCard
          title="Car Management System"
          des="Technology: Angular, .NET Core, MySQL"
          src={project2}
          github_link="https://github.com/atokic/Car-Managment-System"
        />
        <ProjectsCard
          title="YOLO detector"
          des="Technology: Python"
          src={project3}
          github_link="https://github.com/atokic/YOLOv4-Custom-Object-Detecion"
        />
        <ProjectsCard
        title="Chip-Top.com"
        des="Technology: Wordpress"
        src={project35}
        site_link="https://chip-top.com/"          
      />
        <ProjectsCard
          title="Svezabazene.hr"
          des="Technology: Wordpress"
          src={project4}
          site_link="https://svezabazene.hr/"          
        />
        <ProjectsCard
          title="Estetika dek. kamen"
          des="Technology: Wordpress"
          src={project5}
          site_link="https://estetika-dekorativni-kamen.com/"    
        />
        <ProjectsCard
          title="Bazenskatehnika.hr"
          des="Technology: Wordpress"
          src={project6}
          site_link="https://bazenskatehnika.hr/"    
        />
        <ProjectsCard
          title="FireBody Say Yes"
          des="Technology: Wordpress"
          src={project16}
          site_link="https://firebody-say-yes.com/"   
        />
        <ProjectsCard
          title="Mikis Food & Bar"
          des="Technology: Wordpress"
          src={project17}
          site_link="http://mikis-food.com/"   
        />
        <ProjectsCard
          title="Hair Style"
          des="Technology: Wordpress"
          src={project19}
          site_link="https://hairstyle-sinj.com/"   
        />  
        <ProjectsCard
          title="MaK boutique"
          des="Technology: Wordpress"
          src={project18}
          site_link="https://mak-boutique.com/"   
        />  
        <ProjectsCard
          title="Lybsom massage"
          des="Technology: Wordpress"
          src={project21}
          site_link="https://lybsom-massage.com/"   
        /> 
        <ProjectsCard
          title="Pčelarstvo Dolić"
          des="Technology: Wordpress"
          src={project36}
          site_link="https://pcelarstvo-dolic.com/"   
        />          
        <ProjectsCard
          title="React Calculator"
          des="Technology: React"
          src={project7}
          github_link="https://github.com/atokic/ReactJS_Calculator"
          site_link="https://reactjs-simple-calculator-app.netlify.app/"   
        />
        <ProjectsCard
          title="React Portfolio"
          des="Technology: React, Tailwind"
          src={project20}
          github_link="https://github.com/atokic/ReactJS_portfolio/"
          site_link="https://atokic.netlify.app/"   
        />
        <ProjectsCard
          title="Booking App"
          des="Technology: MERN"
          src={project8}
          github_link="https://github.com/atokic/MERN-Booking-App"
        />
        <ProjectsCard
          title="React SaSS Portfolio"
          des="Technology: React"
          src={project9}
          github_link="https://github.com/atokic/ReactJS-SaSS-Portfolio"   
          site_link="https://portfolio-ante.netlify.app/"
        />
        <ProjectsCard
          title="Youtube Downloader"
          des="Technology: Python"
          src={project10}
          github_link="https://github.com/atokic/Python-Youtube-Downloader-and-Converter"
        />
        <ProjectsCard
          title="MERN ToDo List App"
          des="Technology: MERN"
          src={project11}
          github_link="https://github.com/atokic/MERN-ToDo-List"
        />
        <ProjectsCard
          title="React Weather App"
          des="Technology: React"
          src={project12}
          github_link="https://github.com/atokic/ReactJS-Weather-App"
          site_link="https://reactjs-simple-weather.netlify.app/" 
        />
        <ProjectsCard
          title="React Random Quote"
          des="Technology: React"
          src={project13}
          github_link="https://github.com/atokic/ReactJS-Random-Quote-App"
          site_link="https://random-qoute-app.netlify.app/" 
        />
        <ProjectsCard
          title="React Tic Tac Toe Game"
          des="Technology: React"
          src={project14}
          github_link="https://github.com/atokic/ReactJS-Tic-Tac-Toe-Game"
          site_link="https://reactjs-game-tic-tac-toe.netlify.app/" 
        />
        <ProjectsCard
          title="React Restaurant"
          des="Technology: React"
          src={project15}
          github_link="https://github.com/atokic/ReactJS-Restaurant-Website"
          site_link="https://reactjs-restaurant-website.netlify.app/" 
        />  
        <ProjectsCard
          title="F1"
          des="Technology: React Native"
          src={project22}
          github_link="https://github.com/atokic/F1-React-Native-App"
        /> 
        <ProjectsCard
          title="Chuck Norris Joke Backend App"
          des="Technology: TypeScript, REST, Node js, Express, MongoDB"
          src={project23}
          github_link="https://github.com/atokic/Chuck_Norris_Joke_App"
        />
        <ProjectsCard
          title="Project Tracking Software"
          des="Technology: MERN"
          src={project37}
          github_link="https://github.com/atokic/Project-Tracking-Software/"
        />  
        <ProjectsCard
          title="React Essential"
          des="Technology: React"
          src={project24}
          github_link="https://github.com/atokic/React-Essentials"
          site_link="https://react-essentials-app.netlify.app/" 
        />   
        <ProjectsCard
          title="React Tic-Tac-Toe"
          des="Technology: React"
          src={project25}
          github_link="https://github.com/atokic/React-Tic-Tac-Toe"
          site_link="https://tic-tac-toe-app-game-react.netlify.app/" 
        /> 
        <ProjectsCard
          title="React Investment Calculator"
          des="Technology: React"
          src={project26}
          github_link="https://github.com/atokic/Investment-Calculator"
          site_link="https://investment-calculator-app-react.netlify.app/" 
        />
        <ProjectsCard
          title="React Styling"
          des="Technology: React"
          src={project27}
          github_link="https://github.com/atokic/React-Styling"
          site_link="https://react-styling.netlify.app/" 
        />  
        <ProjectsCard
          title="React Timers Challenge App"
          des="Technology: React"
          src={project28}
          github_link="https://github.com/atokic/Timers-Challenge-App"
          site_link="https://timers-challenge-app.netlify.app/" 
        />
        <ProjectsCard
          title="React Project Management App"
          des="Technology: React"
          src={project29}
          github_link="https://github.com/atokic/Project-Management-App"
          site_link="https://project-management-application-react.netlify.app/" 
        />
        <ProjectsCard
          title="React Advanced State Management"
          des="Technology: React"
          src={project30}
          github_link="https://github.com/atokic/React-Advanced-State-Management"
          site_link="https://advanced-state-management-react.netlify.app/" 
        /> 
        <ProjectsCard
          title="React Place Picker With Local Storage"
          des="Technology: React"
          src={project31}
          github_link="https://github.com/atokic/Place-Picker"
          site_link="https://react-place-picker.netlify.app/" 
        /> 
        <ProjectsCard
          title="React Quiz App"
          des="Technology: React"
          src={project32}
          github_link="https://github.com/atokic/React-Quiz-App"
          site_link="https://quiz-game-app-react.netlify.app/" 
        /> 
        <ProjectsCard
          title="React behind the scenes"
          des="Technology: React"
          src={project33}
          github_link="https://github.com/atokic/React---Behind-The-Scenes"
          site_link="https://react-behind-the-scenes.netlify.app/" 
        />
        <ProjectsCard
          title="React Class-based Components"
          des="Technology: React"
          src={project34}
          github_link="https://github.com/atokic/React-Class-based-Components"
          site_link="https://react-class-based-components-example.netlify.app/" 
        />
        <ProjectsCard
          title="React Place Picker With Backend"
          des="Technology: React"
          src={project38}
          github_link="https://github.com/atokic/Place-Picker-With-Backend"
        />
        <ProjectsCard
          title="React Place Picker With Custom Hook"
          des="Technology: React"
          src={project39}
          github_link="https://github.com/atokic/React-Place-Picker-With-Custom-Hook"
        />       
        <ProjectsCard
          title="React Place Picker With Custom Hook"
          des="Technology: React"
          src={project40}
          github_link="https://github.com/atokic/React-Forms"
          site_link="https://react-forms-inputs.netlify.app/"
        />   
        <ProjectsCard
          title="React Food Order App"
          des="Technology: React"
          src={project41}
          github_link="https://github.com/atokic/React-Food-Order-App"
        />                                                                               
      </div>
    </section>
  );
}

export default Projects