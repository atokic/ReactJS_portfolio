import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectEleven, projectTwelve, projectThirteen, projectFourteen, projectFifteen, projectSixteen, projectSeventeen, projectEighteen, projectNineteen, projectTwenty,projectTwentyOne, projectTwentyTwo, projectTwentyThree} from "../../assets/index";
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
          src={projectOne}
          github_link="https://github.com/atokic/Web-service-for-dynamic-video-streaming"

        />
        <ProjectsCard
          title="Car Managment System"
          des="Technology: Angular, .NET Core, MySQL"
          src={projectTwo}
          github_link="https://github.com/atokic/Car-Managment-System"
        />
        <ProjectsCard
          title="YOLO detector"
          des="Technology: Python"
          src={projectThree}
          github_link="https://github.com/atokic/YOLOv4-Custom-Object-Detecion"
        />
        <ProjectsCard
          title="Svezabazene.hr"
          des=" Technology: Wordpress"
          src={projectFour}
          site_link="https://svezabazene.hr/"          
        />
        <ProjectsCard
          title="Estetika dek. kamen"
          des=" Technology: Wordpress"
          src={projectFive}
          site_link="https://estetika-dekorativni-kamen.com/"    
        />
        <ProjectsCard
          title="Bazenskatehnika.hr"
          des=" Technology: Wordpress"
          src={projectSix}
          site_link="https://bazenskatehnika.hr/"    
        />
        <ProjectsCard
          title="FireBody Say Yes"
          des=" Technology: Wordpress"
          src={projectSixteen}
          site_link="https://firebody-say-yes.com/"   
        />
        <ProjectsCard
          title="Mikis Food & Bar"
          des=" Technology: Wordpress"
          src={projectSeventeen}
          site_link="http://mikis-food.com/"   
        />
        <ProjectsCard
          title="Hair Style"
          des=" Technology: Wordpress"
          src={projectNineteen}
          site_link="https://hairstyle-sinj.com/"   
        />  
        <ProjectsCard
          title="MaK boutique"
          des=" Technology: Wordpress"
          src={projectEighteen}
          site_link="https://mak-boutique.com/"   
        />  
        <ProjectsCard
          title="Lybsom massage"
          des=" Technology: Wordpress"
          src={projectTwentyOne}
          site_link="https://lybsom-massage.com/"   
        />          
        <ProjectsCard
          title="React Calculator"
          des=" Technology: React.js"
          src={projectSeven}
          github_link="https://github.com/atokic/ReactJS_Calculator"
          site_link="https://reactjs-simple-calculator-app.netlify.app/"   
        />
        <ProjectsCard
          title="React Portfolio"
          des=" Technology: React.js, Tailwind"
          src={projectTwenty}
          github_link=""
          site_link="https://atokic.netlify.app/"   
        />
        <ProjectsCard
          title="Booking App"
          des=" Technology: MERN"
          src={projectEight}
          github_link="https://github.com/atokic/MERN-Booking-App"
        />
        <ProjectsCard
          title="React Portfolio"
          des=" Technology: React.js"
          src={projectNine}
          github_link="https://portfolio-ante.netlify.app/"
          site_link="https://github.com/atokic/ReactJS_portfolio"   
        />
        <ProjectsCard
          title="Youtube Downloader"
          des=" Technology: Python"
          src={projectTen}
          github_link="https://github.com/atokic/Python-Youtube-Downloader-and-Converter"
        />
        <ProjectsCard
          title="MERN ToDo List App"
          des=" Technology: MERN"
          src={projectEleven}
          github_link="https://github.com/atokic/MERN-ToDo-List"
        />
        <ProjectsCard
          title="React Weather App"
          des=" Technology: React.js"
          src={projectTwelve}
          github_link="https://github.com/atokic/ReactJS-Weather-App"
          site_link="https://reactjs-simple-weather.netlify.app/" 
        />
        <ProjectsCard
          title="React Random Quote"
          des=" Technology: React.js"
          src={projectThirteen}
          github_link="https://github.com/atokic/ReactJS-Random-Quote-App"
          site_link="https://random-qoute-app.netlify.app/" 
        />
        <ProjectsCard
          title="React Tic Tac Toe Game"
          des=" Technology: React.js"
          src={projectFourteen}
          github_link="https://github.com/atokic/ReactJS-Tic-Tac-Toe-Game"
          site_link="https://reactjs-game-tic-tac-toe.netlify.app/" 
        />
        <ProjectsCard
          title="React Restaurant"
          des=" Technology: React.js"
          src={projectFifteen}
          github_link="https://github.com/atokic/ReactJS-Restaurant-Website"
          site_link="https://reactjs-restaurant-website.netlify.app/" 
        />  
        <ProjectsCard
          title="F1"
          des=" Technology: React Native"
          src={projectTwentyTwo}
          github_link="https://github.com/atokic/F1-React-Native-App"
        /> 
        <ProjectsCard
          title="Chuck Norris Joke Backend App"
          des=" Technology: TypeScript, REST, Node js, Express, MongoDB"
          src={projectTwentyThree}
          github_link="https://github.com/atokic/Chuck_Norris_Joke_App"
        />                                                                                  
      </div>
    </section>
  );
}

export default Projects