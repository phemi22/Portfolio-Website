import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const contactInfo = {
    email: "femistephenadedokun@gmail.com",
    github: "https://github.com/phemi22",
    twitter: "https://x.com/femisteven_",
    linkedin: "https://www.linkedin.com/in/femi-adedokun/"
  };

  const ContactLink = ({ href, icon, platform }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors duration-300 ${
        isDark 
          ? "text-gray-300 hover:bg-gray-800 hover:text-white" 
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      <span>{platform}</span>
    </a>
  );

  return (
    <section 
      id="contact" 
      className={`py-20 px-4 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-12 text-center`}>
          Contact Me
        </h2>
        <div className="max-w-md mx-auto grid gap-4">
          <ContactLink 
            href={`mailto:${contactInfo.email}`} 
            icon={<Mail className="w-6 h-6" />} 
            platform="Email" 
          />
          <ContactLink 
            href={contactInfo.github} 
            icon={<Github className="w-6 h-6" />} 
            platform="GitHub" 
          />
          <ContactLink 
            href={contactInfo.twitter} 
            icon={<Twitter className="w-6 h-6" />} 
            platform="Twitter" 
          />
          <ContactLink 
            href={contactInfo.linkedin} 
            icon={<Linkedin className="w-6 h-6" />} 
            platform="LinkedIn" 
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;