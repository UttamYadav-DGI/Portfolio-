import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  MapPin, 
  Trophy,  
  GraduationCap, 
  ArrowUpRight,
  Terminal,
  Layers,
  Globe,
  Code,
  Phone,
  Download,
  Sun,
  Moon,
  ExternalLink,
  Activity,
  Award,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, NAV_LINKS } from './constant';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    document.body.className = isDark ? 'dark noise' : 'light noise';
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-[#fcfcfc] text-[#1a1a1a]'} p-4 md:p-8 lg:p-12 pb-44 selection:bg-violet-500/30`}>
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-colors duration-1000 ${isDark ? 'bg-violet-600/10' : 'bg-violet-500/5'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-colors duration-1000 ${isDark ? 'bg-blue-600/5' : 'bg-blue-400/5'}`} />
      </div>

      <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Profile / Hero Section */}
        <div id="about" className="md:col-span-8 bento-card p-10 md:p-14 flex flex-col justify-between group scroll-mt-24">
          <div className="flex justify-between items-start">
            <div className={`px-4 py-2 rounded-full border flex items-center gap-3 transition-colors ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Available for Projects</span>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 text-yellow-400 border border-zinc-800 hover:bg-zinc-800' : 'bg-white text-indigo-600 border border-zinc-200 hover:shadow-lg'}`}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          
          <div className="mt-16 md:mt-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              Hello, <span className="text-violet-500 italic">Uttam</span> <br />
              <span className={isDark ? 'text-zinc-800' : 'text-zinc-300'}>Architecting Digital Experiences</span>
            </h1>
            <p className={`mt-10 max-w-xl text-lg md:text-xl font-normal leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Full-Stack Developer specializing in high-performance applications with the MERN stack and modular architectures.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8">
            <a href="#projects" className={`group/btn relative px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800 shadow-xl'}`}>
              <span className="relative z-10 flex items-center gap-3">
                View Gallery <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </span>
            </a>
            <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm uppercase tracking-widest">
              <MapPin size={18} className="text-violet-500" /> Noida, India
            </div>
          </div>
        </div>

        {/* Essential Quick Widgets */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <a href={PERSONAL_INFO.links.github} target="_blank" className="bento-card p-8 flex flex-col items-center justify-center gap-4 group">
            <Github size={44} className="text-zinc-600 group-hover:text-violet-500 transition-all duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Github</span>
          </a>
          <a href={PERSONAL_INFO.links.linkedin} target="_blank" className="bento-card p-8 flex flex-col items-center justify-center gap-4 group">
            <Linkedin size={44} className="text-zinc-600 group-hover:text-blue-500 transition-all duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Linkedin</span>
          </a>
          <div className={`bento-card col-span-2 p-10 flex flex-col items-center justify-center gap-3 ${isDark ? 'bg-zinc-900/20' : 'bg-zinc-50'}`}>
            <span className="text-4xl font-mono font-black tracking-tighter">{currentTime}</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">India Standard Time</span>
          </div>
          <a 
            href={PERSONAL_INFO.links.resume} 
            download
            className={`col-span-2 bento-card p-10 flex items-center justify-between group transition-all ${isDark ? 'hover:bg-violet-900/10' : 'hover:bg-violet-50'}`}
          >
            <div>
              <h3 className="text-xl font-black uppercase italic">Curriculum</h3>
              <p className="text-zinc-500 text-sm mt-1">Latest Professional Resume</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform">
              <Download size={24} />
            </div>
          </a>
        </div>

        {/* GitHub Contributions Live Chart */}
        <div className="md:col-span-12 bento-card p-10 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                <Github size={28} />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-widest">Coding Pulse</h3>
                <p className="text-sm text-zinc-500 font-medium">Real-time GitHub activity data</p>
              </div>
            </div>
            <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border ${isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'}`}>
               <Calendar size={18} className="text-green-500" />
               <span className="text-xs font-black uppercase tracking-widest text-green-500">365 Days Tracking</span>
            </div>
          </div>
          
          <div className="relative overflow-x-auto pb-6 custom-scrollbar">
            <div className="min-w-225">
              <img 
                src={`https://ghchart.rshah.org/green/Uttamyadav-DGI`} 
                alt="GitHub Contribution Graph"
                className={`w-full h-auto object-contain transition-all duration-700 ${isDark ? 'invert-[0.9] hue-rotate-180 brightness-150 contrast-125' : 'brightness-95 contrast-110'}`}
              />
            </div>
          </div>

         
        </div>

        {/* Academic Profile */}
        <div id="education" className="md:col-span-6 bento-card p-10 scroll-mt-24">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
            <GraduationCap size={24} className="text-violet-500" /> Education
          </h3>
          <div className="space-y-10">
            <div className="relative pl-10 border-l-2 border-violet-500/20">
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-violet-600 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
              <h4 className="text-xl font-black tracking-tight">B.Tech in Computer Science</h4>
              <p className="text-zinc-500 text-sm mt-1 font-medium">AKTU (DGI) • 2022 — 2026</p>
              <div className="mt-6 flex items-center gap-4">
                <div className={`h-2 flex-1 rounded-full overflow-hidden ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                  <div className="w-[72%] h-full bg-violet-600 rounded-full" />
                </div>
                <span className="text-sm font-mono font-black text-violet-500">7.2 GPA</span>
              </div>
            </div>
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-zinc-950/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
              <p className="text-sm font-medium leading-relaxed italic text-zinc-500">Focusing on Data Structures, Algorithms, System Design, and Modern Web Frameworks.</p>
            </div>
          </div>
        </div>

        {/* Honours & Certificates Section - Linked */}
        <div id="awards" className="md:col-span-6 bento-card p-10 scroll-mt-24">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
            <Award size={24} className="text-yellow-500" /> Honours
          </h3>
          <div className="space-y-6">
            {[
              { 
                title: 'TCS CodeVita Season 12', 
                desc: 'Global Rank 5366', 
                icon: <Activity size={20} />, 
                link: "https://drive.google.com/file/d/1j_DGqIy8K5Bge9_UKzhFS99hyxDOj0-Y/view?usp=sharing", 
                color: 'text-orange-500' 
              },
              { 
                title: 'LeetCode Specialist', 
                desc: '400+ Problems Solved', 
                icon: <Code size={20} />, 
                link: PERSONAL_INFO.links.leetcode, 
                color: 'text-yellow-500' 
              },
              { 
                title: 'Hackathon Winner', 
                desc: 'Dron-Pratibimb 2023 Winner', 
                icon: <Trophy size={20} />, 
                link: 'https://drive.google.com/file/d/1sru9mNTCzDwmIZxk72BjYAe3xxmjGRX_/view', 
                color: 'text-blue-500' 
              }
            ].map((ach, i) => (
              <a 
                key={i} 
                href={ach.link} 
                target="_blank" 
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all group/item ${isDark ? 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-100 hover:shadow-md'}`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'} ${ach.color}`}>
                    {ach.icon}
                  </div>
                  <div>
                    <p className="text-base font-black tracking-tight">{ach.title}</p>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">{ach.desc}</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-zinc-700 group-hover/item:text-violet-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div id="skills" className="md:col-span-12 bento-card p-10 scroll-mt-24">
           <h3 className="text-xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4">
             <Terminal size={24} className="text-violet-500" /> Arsenal
           </h3>
           <div className="flex flex-wrap gap-3">
             {SKILLS.flatMap(s => s.skills).map((skill, idx) => (
               <span key={idx} className={`px-5 py-2.5 border rounded-2xl text-sm font-bold transition-all cursor-default ${isDark ? 'bg-zinc-900/40 border-zinc-800 text-zinc-500 hover:text-white hover:border-violet-500/40' : 'bg-white border-zinc-200 text-zinc-500 hover:text-black hover:border-zinc-400'}`}>
                 {skill}
               </span>
             ))}
           </div>
        </div>

        {/* Project Uniform Gallery */}
        <div id="projects" className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 scroll-mt-24">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title} 
              className={`bento-card p-10 flex flex-col justify-between group h-full transition-all ${isDark ? 'hover:bg-zinc-900/10' : 'hover:bg-white hover:shadow-2xl'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-100'}`}>
                    {index % 2 === 0 ? <Code size={32} className="text-violet-500" /> : <Layers size={32} className="text-blue-500" />}
                  </div>
                  <div className="flex gap-2.5">
                    {project.link && (
                      <a href={project.link} target="_blank" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                        <Globe size={20} />
                      </a>
                    )}
                    <a href={project.github} target="_blank" className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800' : 'bg-white border-zinc-200 text-black hover:bg-zinc-100'}`}>
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className={`text-base font-normal leading-relaxed mb-8 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tools.slice(0, 3).map(t => (
                    <span key={t} className={`text-[10px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-600' : 'bg-zinc-50 border-zinc-100 text-zinc-400'}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-500/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-600">Active Stage</span>
                <a href={project.github} className="text-xs font-black uppercase tracking-widest text-violet-500 flex items-center gap-2 hover:gap-4 transition-all">
                  Deep Dive <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Center */}
        <div className={`md:col-span-12 bento-card p-16 md:p-32 text-center mt-6 relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white border-violet-500/20' : 'bg-black text-white'}`}>
           <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-16">
              LET'S <br /> <span className="text-violet-500">INITIATE.</span>
           </h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto relative z-10">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-full sm:w-auto px-16 py-8 bg-white text-black rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 shadow-2xl">
                <Mail size={22} /> Send Mail
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="w-full sm:w-auto px-16 py-8 bg-zinc-900 border border-zinc-800 text-white rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-4">
                <Phone size={22} /> Call Direct
              </a>
           </div>
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

      </div>

      {/* Modern Dock Navigation */}
      <nav className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 p-2.5 backdrop-blur-3xl border rounded-[2.5rem] shadow-2xl flex items-center gap-1 transition-all duration-500 ${isDark ? 'bg-zinc-900/60 border-white/10' : 'bg-white/60 border-black/10'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`p-4 rounded-3xl transition-all group relative ${isDark ? 'text-zinc-500 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-black hover:bg-black/5'}`}
          >
            <link.icon size={22} />
            <span className={`absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 text-[10px] font-black rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-widest shadow-2xl scale-75 group-hover:scale-100 ${isDark ? 'bg-zinc-800 text-white' : 'bg-black text-white'}`}>
              {link.label}
            </span>
          </a>
        ))}
        <div className={`w-px h-8 mx-3 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
        <a 
          href={PERSONAL_INFO.links.github} 
          target="_blank" 
          className={`p-4 rounded-3xl transition-all ${isDark ? 'text-zinc-500 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-black hover:bg-black/5'}`}
        >
          <Github size={22} />
        </a>
      </nav>

      {/* Footer */}
      <footer className="mt-40 text-center pb-24 border-t border-zinc-500/10 pt-20">
        <p className={`text-xs font-mono uppercase tracking-[0.8em] font-black ${isDark ? 'text-zinc-800' : 'text-zinc-300'}`}>
          Uttam Yadav • Engineered in India • 2022-2026
        </p>
      </footer>
    </div>
  );
};

export default App;