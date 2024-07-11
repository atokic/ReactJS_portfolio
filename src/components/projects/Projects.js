import React, { useState } from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import projects from './ProjectsList';
import EmptyProjectList from './EmptyProjectList';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-10">
          <li onClick={() => handleClick("all")} className={`resumeLi ${activeCategory === "all" ? "border-designColor rounded-lg" : "border-transparent"}`}>
            All Projects
          </li>
          <li onClick={() => handleClick("development")} className={`resumeLi ${activeCategory === "development" ? "border-designColor rounded-lg" : "border-transparent"}`}>
            Software / Web development
          </li>
          <li onClick={() => handleClick("webDesign")} className={`resumeLi ${activeCategory === "webDesign" ? "border-designColor rounded-lg" : "border-transparent"}`}>
            Web Design
          </li>
          <li onClick={() => handleClick("graphicDesign")} className={`resumeLi ${activeCategory === "graphicDesign" ? "border-designColor rounded-lg" : "border-transparent"}`}>
            Graphic Design
          </li>
        </ul>
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {filteredProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              github_link={project.github_link}
              site_link={project.site_link}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 lgl:mt-14 w-full h-auto flex flex-col">
          <EmptyProjectList
            title="Currently there is no projects available in this category"
            result="Please check back later"
            des="No projects available in this category. Please be patient, list will be updated soon. Thank you."
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
