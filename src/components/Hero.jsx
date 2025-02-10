import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {motion} from "framer-motion";

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`min-h-screen flex items-center justify-center px-4 pt-20 ${
      isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-100 via-white to-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 initial={{ x: "-100vw", opacity: 0 }} // Start off-screen
            animate={{ x: 0, opacity: 1 }}        // Move to the final position
            transition={{ duration: 3, ease: "easeOut", repeat: 2, repeatType: "reverse" }}
            className={`text-4xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}
        >   Hi, I'm <span className="text-blue-500">Femi Adedokun</span>
        </motion.h1>
        <p className={`text-xl md:text-2xl ${isDark ? "text-gray-300" : "text-gray-600"} mb-8`}>
          Front End Developer | UI/UX Designer
        </p>
        <p className={`${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-12`}>
          I am a skilled Front-End Developer with a strong command of React.js, HTML, CSS, and JavaScript. 
          My passion lies in creating seamless user experiences, blending technical proficiency with a 
          keen eye for design. With hands-on experience in building dynamic web applications and designing 
          prototypes in Figma, I ensure that every project is both functional and visually appealing.
        </p>
        <div className="flex justify-center space-x-4">
          <SocialLink href="https://github.com/phemi22" icon={<Github className="w-6 h-6" />} />
          <SocialLink href="https://x.com/femisteven_" icon={<Twitter className="w-6 h-6" />} />
          <SocialLink href="https://www.linkedin.com/in/femi-adedokun/" icon={<Linkedin className="w-6 h-6" />} />
          <SocialLink href="mailto:femistephenadedokun@gmail.com" icon={<Mail className="w-6 h-6" />} />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => {
  const { isDark } = useTheme();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-2 rounded-full ${
        isDark ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900"
      } transition-colors`}
    >
      {icon}
    </a>
  );
};

export default Hero;