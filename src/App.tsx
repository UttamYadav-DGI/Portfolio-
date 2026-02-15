import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  Calendar,
  Clock,
  Info,
  Play,
  Square,
  Disc,
  Volume2,
  ArrowUp,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, NAV_LINKS } from './constant';

// --- Custom LeetCode Heatmap Component ---
const LeetCodeHeatmap: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const heatmapData = useMemo(() => {
    return Array.from({ length: 53 * 7 }).map(() => Math.floor(Math.random() * 5));
  }, []);

  const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

  const getIntensityClass = (val: number) => {
    if (val === 0) return isDark ? 'bg-zinc-900' : 'bg-zinc-100';
    if (val === 1) return 'bg-green-900/40';
    if (val === 2) return 'bg-green-700/60';
    if (val === 3) return 'bg-green-500/80';
    return 'bg-green-400';
  };

  const badgeImages = [
    { 
      id: '365', 
      label: '365 Days Badge', 
      img: 'https://assets.leetcode.com/static_assets/marketing/lg365.png',
      color: 'from-yellow-400 to-amber-600'
    },
    { 
      id: '100', 
      label: '100 Days Badge', 
      img: 'https://assets.leetcode.com/static_assets/others/lg25100.png',
      color: 'from-blue-400 to-cyan-600'
    },
    { 
      id: '50', 
      label: '50 Days Badge', 
      img: 'https://assets.leetcode.com/static_assets/others/lg2550.png',
      color: 'from-green-400 to-emerald-600'
    }
  ];
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-2 no-hover">
          <span className="text-2xl font-black tracking-tight hover-text">1,042</span>
          <span className="text-sm text-zinc-500 font-medium flex items-center gap-1.5">
            submissions in the past one year <Info size={14} className="opacity-50" />
          </span>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-zinc-500">
          <div className="flex flex-col items-end">
            <span className="opacity-60 font-bold">Total active days</span>
            <span className={isDark ? 'text-white' : 'text-black'}>224</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="opacity-60 font-bold">Max streak</span>
            <span className={isDark ? 'text-white' : 'text-black'}>62</span>
          </div>
          <div className={`px-3 py-1.5 rounded-lg border flex items-center gap-2 transition-all hover:border-violet-500 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200 text-black'}`}>
            Current <ChevronRight size={14} className="rotate-90" />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-4 custom-scrollbar no-hover">
        <div className="min-w-225">
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 h-32">
            {heatmapData.map((val, i) => (
              <div 
                key={i} 
                className={`w-3.5 h-3.5 rounded-xs transition-all duration-300 hover:scale-125 ${getIntensityClass(val)}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 px-1">
            {months.map((m, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest text-zinc-500 w-full text-center">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 mb-8 no-hover">
        <h3 className="text-lg font-black uppercase tracking-widest flex items-center gap-3 hover-text">
          <Trophy size={20} className="text-yellow-500 animate-pulse" /> LeetCode Achievements
        </h3>
      </div>

      <div className="flex flex-wrap gap-6 items-center">
        {badgeImages.map((badge, idx) => (
          <div 
            key={badge.id}
            className={`flex-1 min-w-50 bento-card p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer ${isDark ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-zinc-100 shadow-sm'}`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="relative">
              <div className={`absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity bg-linear-to-tr ${badge.color}`} />
              <img 
                src={badge.img} 
                alt={badge.label}
                className="w-24 h-24 object-contain relative transition-transform duration-700 group-hover:scale-125 drop-shadow-xl"
              />
            </div>
            <div className="text-center no-hover">
              <p className="text-sm font-black tracking-tighter uppercase mb-0.5 group-hover:text-violet-500 transition-colors">{badge.id} Days</p>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Streak Badge</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  }));

  useEffect(() => {
    document.body.className = isDark ? 'dark noise' : 'light noise';
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, [isDark]);

  useEffect(() => {
    audioRef.current = new Audio('/song.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback blocked", e));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDark ? 'bg-black text-white' : 'bg-[#fcfcfc] text-[#1a1a1a]'} p-4 md:p-8 lg:p-12 pb-44 selection:bg-violet-500/30`}>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-all duration-1000 ${isDark ? 'bg-violet-600/10' : 'bg-violet-500/5'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-all duration-1000 ${isDark ? 'bg-blue-600/5' : 'bg-blue-400/5'}`} />
      </div>

      <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Profile / Hero Section */}
        <div id="about" className="md:col-span-8 bento-card p-10 md:p-14 flex flex-col justify-between group scroll-mt-24">
          <div className="flex justify-between items-start no-hover">
            <div className={`px-4 py-2 rounded-full border flex items-center gap-3 transition-all hover:border-green-500/50 ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
              <span className="relative flex h-2 w-2 no-hover">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Available for Projects</span>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all hover:rotate-12 active:scale-90 ${isDark ? 'bg-zinc-900 text-yellow-400 border border-zinc-800 hover:bg-zinc-800' : 'bg-white text-indigo-600 border border-zinc-200 hover:shadow-lg'}`}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          
          <div className="mt-16 md:mt-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] cursor-default group">
              I 'M, <span className="text-violet-500 italic transition-all group-hover:tracking-tighter duration-700">Uttam</span> <br />
              <span className={`transition-colors duration-700 ${isDark ? 'text-zinc-800 group-hover:text-zinc-500' : 'text-zinc-200 group-hover:text-zinc-400'}`}>Architecting Digital Experiences</span>
            </h1>
            <p className={`mt-10 max-w-xl text-lg md:text-xl font-normal leading-relaxed transition-all group-hover:translate-x-2 ${isDark ? 'text-zinc-500 group-hover:text-zinc-400' : 'text-zinc-500 group-hover:text-zinc-800'}`}>
              Full-Stack Developer specializing in high-performance applications with the MERN stack and modular architectures.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 no-hover">
            <a href="#projects" className={`group/btn relative px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:-translate-y-1 active:scale-95 ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800 shadow-xl'}`}>
              <div className="absolute inset-0 bg-violet-500/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                View Gallery <ArrowUpRight size={20} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </span>
            </a>
            <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm uppercase tracking-widest hover:text-violet-500 transition-colors">
              <MapPin size={18} className="text-violet-500 animate-bounce" /> Noida, India
            </div>
          </div>
        </div>

        {/* Quick Links Group */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6 no-hover">
          <a href={PERSONAL_INFO.links.github} target="_blank" className="bento-card p-8 flex flex-col items-center justify-center gap-4 group">
            <Github size={44} className="text-zinc-600 group-hover:text-violet-500 group-hover:rotate-12 transition-all duration-700" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-violet-500">Github</span>
          </a>
          <a href={PERSONAL_INFO.links.linkedin} target="_blank" className="bento-card p-8 flex flex-col items-center justify-center gap-4 group">
            <Linkedin size={44} className="text-zinc-600 group-hover:text-blue-500 group-hover:-rotate-12 transition-all duration-700" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-blue-500">Linkedin</span>
          </a>
          
          {/* Enhanced Clock & Music Widget */}
          <div className={`bento-card col-span-2 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group/clock ${isDark ? 'bg-zinc-900/30 border-zinc-800/50' : 'bg-white shadow-2xl border-zinc-100'}`}>
            <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full transition-all duration-1000 ${isMusicPlaying ? 'bg-violet-600/30 opacity-100 scale-150' : 'bg-violet-600/5 opacity-0'}`} />

            <div className="flex justify-between items-start relative z-10 no-hover">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl transition-transform group-hover/clock:scale-110 ${isDark ? 'bg-zinc-950/50 border border-zinc-800' : 'bg-zinc-50 border border-zinc-200'}`}>
                  <Clock size={16} className={`text-violet-500 ${isMusicPlaying ? 'animate-spin duration-4000ms]' : 'animate-pulse'}`} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] leading-none mb-1 group-hover/clock:text-violet-500 transition-colors">Local Time</h4>
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Noida, IND</p>
                </div>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${isDark ? 'bg-zinc-950/50 border-zinc-800 text-zinc-500' : 'bg-zinc-50 border-zinc-200 text-zinc-400'}`}>
                {isMusicPlaying ? <span className="text-violet-500 italic flex items-center gap-1.5"><Volume2 size={10} className="animate-bounce" /> Focus Mode</span> : 'Live'}
              </div>
            </div>
            
            <div className="my-10 relative flex flex-col items-center z-10 no-hover">
              <span className={`text-7xl font-mono font-black tracking-tight tabular-nums flex items-center relative transition-all duration-700 group-hover/clock:tracking-widest ${isDark ? 'text-white drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]' : 'text-black'}`}>
                {currentTime.split(':').map((part, i) => (
                  <React.Fragment key={i}>
                    <span className={i === 2 ? 'text-violet-500 text-4xl mt-3' : ''}>{part}</span>
                    {i < 2 && <span className="mx-1 text-zinc-800/20 dark:text-zinc-100/10 text-5xl font-thin">:</span>}
                  </React.Fragment>
                ))}
              </span>
            </div>

            <div className={`mt-4 p-5 rounded-3xl border relative z-10 backdrop-blur-3xl transition-all duration-700 ${isDark ? 'bg-black/60 border-zinc-800/80 hover:bg-black/80' : 'bg-zinc-50/80 border-zinc-200 hover:shadow-inner'}`}>
              <div className="flex items-center justify-between gap-6 no-hover">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-1000 shrink-0 ${isMusicPlaying ? 'bg-violet-600 text-white shadow-2xl scale-110' : 'bg-zinc-500/10 text-zinc-500'}`}>
                     <Disc size={28} className={isMusicPlaying ? 'animate-spin-slow' : ''} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="flex overflow-hidden whitespace-nowrap">
                      <p className={`text-[11px] font-black uppercase tracking-tighter transition-all ${isMusicPlaying ? 'animate-marquee text-violet-500' : 'text-zinc-500'}`}>
                        Lofi Focus Beats • Interactive Audio • {PERSONAL_INFO.name}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={toggleMusic}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xl hover:rotate-6 active:scale-90 ${isDark ? 'bg-white text-black hover:bg-violet-100' : 'bg-black text-white hover:bg-zinc-800'}`}
                >
                  {isMusicPlaying ? <Square size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                </button>
              </div>
            </div>
          </div>

          <a href={PERSONAL_INFO.links.resume} download className={`col-span-2 bento-card p-10 flex items-center justify-between group`}>
            <div>
              <h3 className="text-xl font-black uppercase italic group-hover:text-violet-500 transition-colors">Curriculum</h3>
              <p className="text-zinc-500 text-sm mt-1">Download Resume</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 no-hover">
              <Download size={24} />
            </div>
          </a>
        </div>

        {/* Pulse & Stats Section */}
        <div className="md:col-span-12 bento-card p-10 md:p-12 overflow-hidden group">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 no-hover">
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl transition-all group-hover:bg-zinc-800 ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                <Github size={28} className="group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-widest group-hover:text-green-500 transition-colors">GitHub Pulse</h3>
                <p className="text-sm text-zinc-500 font-medium">Daily algorithmic consistency</p>
              </div>
            </div>
            <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border transition-all group-hover:scale-105 ${isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'}`}>
               <Calendar size={18} className="text-green-500 animate-pulse" />
               <span className="text-xs font-black uppercase tracking-widest text-green-500">850+ Total Commits</span>
            </div>
          </div>
          <div className="relative overflow-x-auto pb-6 custom-scrollbar no-hover">
            <div className="min-w-250 transition-all group-hover:opacity-90">
              <img 
                src={`https://ghchart.rshah.org/green/Uttamyadav-DGI`} 
                alt="GitHub Contribution Graph"
                className={`w-full h-auto object-contain transition-all duration-1000 group-hover:scale-[1.01] ${isDark ? 'invert-[0.9] hue-rotate-180 brightness-150 contrast-125' : 'brightness-95 contrast-110'}`}
              />
            </div>
          </div>
        </div>

        {/* LeetCode Activity */}
        <div className="md:col-span-12 bento-card p-10 md:p-12 overflow-hidden group">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 no-hover">
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl transition-all group-hover:bg-orange-500/10 ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                <Activity size={28} className="text-orange-500 group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase tracking-widest group-hover:text-orange-500 transition-colors">LeetCode Heatmap</h3>
                <p className="text-sm text-zinc-500 font-medium">Competitive programming active pulse</p>
              </div>
            </div>
            <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border transition-all group-hover:border-orange-500/30 ${isDark ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'}`}>
               <Trophy size={18} className="text-yellow-500" />
               <span className="text-xs font-black uppercase tracking-widest text-orange-500">400+ Solved</span>
            </div>
          </div>
          <LeetCodeHeatmap isDark={isDark} />
        </div>
        
         {/* Tech Arsenal */}
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

        {/* Academic Journey */}
        <div id="education" className="md:col-span-6 bento-card p-10 scroll-mt-24 group">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4 cursor-default group-hover:text-violet-500 transition-colors">
            <GraduationCap size={24} className="text-violet-500 group-hover:scale-110 transition-transform" /> Education
          </h3>
          <div className="space-y-10">
            <div className="relative pl-10 border-l-2 border-violet-500/20">
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-violet-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all group-hover:scale-125" />
              <h4 className="text-xl font-black tracking-tight group-hover:translate-x-2 transition-transform">B.Tech in Computer Science</h4>
              <p className="text-zinc-500 text-sm mt-1 font-medium">AKTU (DGI) • 2022 — 2026</p>
              <div className="mt-6 flex items-center gap-4">
                <div className={`h-2 flex-1 rounded-full overflow-hidden ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                  <div className="w-[72%] h-full bg-violet-600 rounded-full group-hover:w-[75%] transition-all duration-1000" />
                </div>
                <span className="text-sm font-mono font-black text-violet-500">7.2 GPA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Journey */}
        <div id="awards" className="md:col-span-6 bento-card p-10 scroll-mt-24 group">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-10 flex items-center gap-4 cursor-default group-hover:text-yellow-500 transition-colors">
            <Award size={24} className="text-yellow-500 group-hover:rotate-12 transition-transform" /> Honours
          </h3>
          <div className="space-y-4">
            {[
              { title: 'TCS CodeVita Season 12', desc: 'Global Rank 5366', icon: <Activity size={20} />, link: "https://drive.google.com/file/d/1j_DGqIy8K5Bge9_UKzhFS99hyxDOj0-Y/view?usp=sharing", color: 'text-orange-500' },
              { title: 'LeetCode Specialist', desc: '400+ Problems Solved', icon: <Code size={20} />, link: PERSONAL_INFO.links.leetcode, color: 'text-yellow-500' },
              { title: 'Hackathon Winner', desc: 'Dron-Pratibimb 2023 Winner', icon: <Trophy size={20} />, link: 'https://drive.google.com/file/d/1sru9mNTCzDwmIZxk72BjYAe3xxmjGRX_/view', color: 'text-blue-500' },
              
            ].map((ach, i) => (
              <a key={i} href={ach.link} target="_blank" className={`flex items-center justify-between p-5 rounded-2xl border transition-all group/item ${isDark ? 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-100 hover:shadow-md'}`}>
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

       

        {/* Project Grid */}
        <div id="projects" className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 scroll-mt-24">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className="bento-card p-10 flex flex-col justify-between group h-full">
              <div className="no-hover">
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-100'}`}>
                    {index % 2 === 0 ? <Code size={32} className="text-violet-500" /> : <Layers size={32} className="text-blue-500" />}
                  </div>
                  <div className="flex gap-2.5">
                    {project.link && (
                      <a href={project.link} target="_blank" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                        <Globe size={20} />
                      </a>
                    )}
                    <a href={project.github} target="_blank" className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800' : 'bg-white border-zinc-200 text-black hover:bg-zinc-100'}`}>
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-violet-500 transition-colors group-hover:tracking-tighter duration-500">{project.title}</h3>
                <p className="text-base text-zinc-500 font-normal leading-relaxed mb-8">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-10 no-hover">
                {project.tools.slice(0, 3).map(t => (
                  <span key={t} className={`text-[10px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest transition-all group-hover:bg-violet-500/10 group-hover:text-violet-500 ${isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-600' : 'bg-zinc-50 border-zinc-100 text-zinc-400'}`}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-zinc-500/10 flex items-center justify-between no-hover">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-600">Production Build</span>
                <a href={project.github} className="text-xs font-black uppercase tracking-widest text-violet-500 flex items-center gap-2 hover:gap-4 transition-all">
                  Deep Dive <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Center */}
        <div className={`md:col-span-12 bento-card p-16 md:p-32 text-center mt-6 relative overflow-hidden group ${isDark ? 'bg-zinc-950 text-white' : 'bg-black text-white'}`}>
           <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-16 select-none transition-all group-hover:scale-110 group-hover:tracking-normal duration-1000">
              LET'S <br /> <span className="text-violet-500 italic hover:text-white transition-colors">INITIATE.</span>
           </h2>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto relative z-10 no-hover">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-full sm:w-auto px-16 py-8 bg-white text-black rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 hover:-translate-y-2 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4">
                <Mail size={22} className="group-hover:animate-bounce" /> Reach Out
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="w-full sm:w-auto px-16 py-8 bg-zinc-900 border border-zinc-800 text-white rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-zinc-800 hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center gap-4">
                <Phone size={22} /> Voice Sync
              </a>
           </div>
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

      </div>

      {/* Floating Dock Navigation */}
      <nav className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 p-2.5 backdrop-blur-3xl border rounded-[2.5rem] shadow-2xl flex items-center gap-1 transition-all duration-700 hover:p-4 ${isDark ? 'bg-zinc-900/60 border-white/10 hover:bg-zinc-900/80' : 'bg-white/60 border-black/10 hover:bg-white/80'}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`p-4 rounded-3xl transition-all group relative hover:scale-125 hover:-translate-y-5 ${isDark ? 'text-zinc-500 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-black hover:bg-black/5'}`}
          >
            <link.icon size={22} />
            <span className={`absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 text-[10px] font-black rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none uppercase tracking-widest shadow-2xl scale-50 group-hover:scale-100 ${isDark ? 'bg-zinc-800 text-white' : 'bg-black text-white'}`}>
              {link.label}
            </span>
          </a>
        ))}
        <div className={`w-px h-8 mx-3 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
        <a 
          href={PERSONAL_INFO.links.github} 
          target="_blank" 
          className={`p-4 rounded-3xl transition-all hover:scale-125 hover:-translate-y-5 ${isDark ? 'text-zinc-500 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-black hover:bg-black/5'}`}
        >
          <Github size={22} />
        </a>
      </nav>

      {/* Footer System */}
      <footer className="mt-40 text-center pb-24 border-t border-zinc-500/10 pt-20 no-hover">
        <p className={`text-xs font-mono uppercase tracking-[0.8em] font-black transition-all hover:tracking-[1.4em] duration-1000 ${isDark ? 'text-zinc-600 hover:text-violet-500' : 'text-zinc-300 hover:text-black'}`}>
          Uttam Yadav • Engineered in India • 2022-2026
        </p>
        <button onClick={scrollToTop} className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-violet-500 transition-all flex items-center justify-center gap-2 mx-auto hover:-translate-y-1.25">
           Back to Zenith <ArrowUp size={12} className="animate-bounce" />
        </button>
      </footer>
    </div>
  );
};

export default App;