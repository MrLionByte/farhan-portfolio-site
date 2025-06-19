import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ImGithub as GitHub } from "react-icons/im";
import { IoLogoLinkedin as Linkedin } from "react-icons/io5";
import { FaSquareXTwitter as Twitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Hero = ({navigateToAbout}) => {
  const [typedText, setTypedText] = useState('');
  const texts = ['Web Developer', 'IoT Enthusiast', 'Problem Solver', 'Public Speaker', 'Teacher'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      const shouldDelete = isDeleting;

      setTypedText(prev =>
        shouldDelete
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!shouldDelete && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (shouldDelete && typedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentTextIndex, isDeleting, typingSpeed, texts]);

  const handleScrollToAbout = () => {
    navigateToAbout('about')
  };

  const skills = [
    "Python", "JavaScript (React)", "HTML", "CSS", "Django", "Django REST Framework",
    "React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap",
    "PostgreSQL", "MongoDB", "Redis", "Firebase",
    "Docker", "Kubernetes", "Nginx", "Ingress",
    "Git", "GitHub Actions", "CI/CD", "AWS", "GCP", "Vercel", "Render",
    "Apache Kafka", "Celery", "Postman", "Figma"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 dark:bg-gray-900 text-white transition-all duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-2xl md:text-5xl font-bold mb-6">
          Hello, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-300">
            Farhan Mahmood N
          </span>
        </h1>

        <div className="h-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-200">
            <span>I'm a </span>
            <span className="text-emerald-500 ml-2 font-sans">{typedText}</span>
            <span className="text-emerald-800 animate-blink">|</span>
          </h2>
        </div>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Turning ideas into purposeful software. <br />
          From designs to real-time systems, I build resilient solutions that solve real-world problems—grounded in clarity, driven by curiosity.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {[
            { href: "https://github.com/MrLionByte", icon: <GitHub size={20} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/farhan-mahmood-n/", icon: <Linkedin size={20} />, label: "LinkedIn" },
            { href: "https://x.com/Farhanmn0", icon: <Twitter size={20} />, label: "Twitter" },
            { href: "https://leetcode.com/u/FARHANMN2000/", icon: <TbBrandLeetcode size={20} />, label: "LeetCode" }
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-600 hover:bg-emerald-700 text-emerald-100 transition-all duration-300 shadow-md"
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>

          <button
            onClick={handleScrollToAbout}
            className="mt-16 inline-flex items-center justify-center animate-slide-right"
            aria-label="Scroll to About section"
          >
            <ArrowRight size={28} className="text-emerald-400 hover:text-emerald-500" />
          </button>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gradient-emerald mb-6">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-600 text-sm rounded-xl text-slate-200 border border-slate-400 shadow hover:shadow-lg transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient-emerald mb-4">Personal Interests</h2>
          <ul className="list-disc list-inside text-sm text-gray-300 text-left space-y-1">
            <li>Electronics & IoT enthusiast – love tinkering with circuits and automation</li>
            <li>Football – enjoy playing and following the sport passionately</li>
            <li>Self-learner – constantly exploring new tech & building side projects</li>
          </ul>
        </div>
      </div>
    </section>

  );
};

export default Hero;
