import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = ({ navigateToAbout }) => {
  const [typedText, setTypedText] = useState('');
  const texts = ['Web Developer', 'IoT Enthusiast', 'Problem Solver', 'Public Speaker', 'Teacher'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const profileImageUrl = "https://i.postimg.cc/k5TccQRQ/Black-Gold-Dynamic-Business-Circle-Profile-Image.png";

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      setTypedText(prev =>
        isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentTextIndex, isDeleting, typingSpeed]);

  const handleScrollToAbout = () => navigateToAbout && navigateToAbout('projects');

  const skills = [
    "Python", "JavaScript", "React", "HTML", "CSS", "Django", "REST APIs",
    "Redux", "Tailwind CSS", "Bootstrap", "PostgreSQL", "MongoDB", 
    "Redis", "Firebase", "Docker", "Kubernetes", "AWS", "GCP"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 overflow-hidden">
      {/* SVG dots overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      {/* Glowing animated blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full border border-emerald-500/30">
                  👋 Welcome to my portfolio
                </span>

                <h1 className="text-4xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold leading-tight">
                  <span className="block text-white mb-2">Hello, I'm</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 animate-gradient">
                    Farhan Mahmood N
                  </span>
                </h1>

                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
                    <span className="text-white">I'm a </span>
                    <span className="text-emerald-400 font-medium">{typedText}</span>
                    <span className="text-emerald-400 animate-pulse ml-1">|</span>
                  </h2>
                </div>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Turning ideas into purposeful software. From elegant designs to robust real-time systems, 
                  I build resilient solutions that solve real-world problems—grounded in clarity, driven by curiosity.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  { href: "https://github.com/MrLionByte", icon: <Github size={24} /> },
                  { href: "https://www.linkedin.com/in/farhan-mahmood-n/", icon: <Linkedin size={24} />},
                  { href: "https://x.com/Farhanmn0", icon: <Twitter size={24} /> },
                  { href: "https://leetcode.com/u/FARHANMN2000/", icon: <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" alt="leetcode" className="filter brightness-0 invert w-6 h-6"/> }
                  
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  >
                    <div className="text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {link.icon}
                    </div>
                    <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.platform}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleScrollToAbout}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur-md opacity-40 animate-spin-slow" />

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-emerald-400/50 transition-all duration-500">
                    <img
                      src={profileImageUrl}
                      alt="Farhan Mahmood N"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border-4 border-slate-900 animate-bounce">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Available for work
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Expertise</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-20 text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Code</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🔧", title: "Electronics & IoT", desc: "Tinkering with circuits and automation projects" },
                { icon: "⚽", title: "Football", desc: "Playing and following the beautiful game passionately" },
                { icon: "📚", title: "Continuous Learning", desc: "Always exploring new technologies and building projects" }
              ].map((interest, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
                  <p className="text-gray-400">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
