import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { projectsData } from "../data/projects";

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className={`py-20 px-4 ${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-12 text-center`}>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
      isDark ? "bg-gray-800" : "bg-white"
    }`}>
      <div className="p-6">
        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
          {project.title}
        </h3>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className={`px-3 py-1 rounded-full text-sm ${
              isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
            }`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.liveLink && (
            <ProjectLink href={project.liveLink} text="Live Demo" icon={<ExternalLink className="w-4 h-4 ml-1" />} />
          )}
          {project.githubLink && (
            <ProjectLink href={project.githubLink} text="GitHub" icon={<Github className="w-4 h-4 ml-1" />} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectLink = ({ href, text, icon }) => {
  const { isDark } = useTheme();

  return (
    <a href={href} 
       target="_blank" 
       rel="noopener noreferrer" 
       className={`inline-flex items-center ${
         isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
       } transition-colors`}>
      {text} {icon}
    </a>
  );
};

export default Projects;