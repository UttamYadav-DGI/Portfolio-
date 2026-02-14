
import {Code2, GraduationCap, Award, Briefcase, User } from 'lucide-react';
import type { Project, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Uttam Yadav",
  title: "Full-Stack Developer",
  email: "Uttamyadav9560@gmail.com",
  phone: "+91 8076712659",
  location: "Greater Noida, Uttar Pradesh, India",
  links: {
    linkedin: "https://www.linkedin.com/in/uttam-yadav-01b629256/",
    github: "https://github.com/Uttamyadav-DGI",
    leetcode: "https://leetcode.com/UttamYadav",
    resume: "https://drive.google.com/file/d/1pAbwmbcybf_dhjo2q4lcief5ZxrgZ7pW/view?usp=share_link"
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io", "Appwrite"]
  },
  {
    category: "Database & Tools",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Git", "Docker", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Full-Stack CLI Setup",
    description: "A high-performance CLI tool to automate full-stack environment generation with pre-configured boilerplates.",
    tools: ["Node.js", "Commander.js", "Shell", "Git"],
    github: "https://github.com/UttamYadav-DGI/create-fullstack-setup",
    link:"https://www.npmjs.com/package/create-fullstack-setup",
    highlights: [
      "Automates boilerplate generation for MERN and Next.js.",
      "Pre-configures environment variables and structures.",
      "Integrates ESLint and Tailwind automatically."
    ]
  },
  {
    title: "VideoTube",
    description: "A high-performance video-sharing platform with real-time interactions and media management.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/Uttamyadav-DGI",
    link: "https://chai-code-backend.onrender.com/docs/",
    highlights: [
      "Secure login & role-based access with JWT.",
      "Dynamic video upload using Cloudinary API.",
      "Responsive UI with dark mode support."
    ]
  },


  {
    title: "KisanSetu",
    description: "Empowering farmers with a multi-lingual platform for crop data and AI support.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Chatbot"],
    github: "https://github.com/UttamYadav-DGI/kishanSetu",
    link: "https://kishan-setu-8yif.vercel.app/",
    highlights: [
      "AI-powered chatbot for instant query resolution.",
      "Integrated land record data (Bhulekh, Khatoni).",
      "Multi-language support for improved accessibility."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "TCS CodeVita Season 12",
    description: "Secured Global Rank 5366 in one of the world's largest coding competitions.",
    link:"https://drive.google.com/file/d/1j_DGqIy8K5Bge9_UKzhFS99hyxDOj0-Y/view?usp=sharing"
  },
  {
    title: "LeetCode Specialist",
    description: "Solved 400+ questions on LeetCode. Strong command over Data Structures & Algorithms.",
    link:"https://leetcode.com/u/Uttamyadav"
  },
  {
    title: "Hackathon Winner",
    description: "Winner of internal Hackathon Dron-Pratibimb 2023 and UI-Blind Think Contest.",
    link:"https://drive.google.com/file/d/1sru9mNTCzDwmIZxk72BjYAe3xxmjGRX_/view"
  }
];

export const NAV_LINKS = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Awards', href: '#awards', icon: Award },
];
