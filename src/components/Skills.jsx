import React from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { skillsData } from "../data/skills";

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`py-20 px-4 ${
      isDark ? "bg-gray-800/50" : "bg-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-12 text-center`}>
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => {
  const { isDark } = useTheme();

  return (
    <div className={`px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg ${
      isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-900 hover:bg-gray-50"
    } transition-colors`}>
      <span>{skill}</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
};

export default Skills;