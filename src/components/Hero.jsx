import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { ImGithub as GitHub } from "react-icons/im";
import { IoLogoLinkedin as Linkedin  } from "react-icons/io5";
import { FaSquareXTwitter as Twitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";


const Hero = () => {
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
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Farhan Mahmood</span>
          </h1>
          <div className="h-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300">
              <span className="inline-block">I'm a </span>
              <span className="inline-block text-indigo-600 dark:text-indigo-400 ml-2">{typedText}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Turning ideas into purposeful software. 
                From designs to real-time systems, I build resilient solutions that 
                solve real-world problems—grounded in clarity, driven by curiosity.
            </p>

          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://github.com/MrLionByte" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
              <GitHub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/farhan-mahmood-n/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/Farhanmn0" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://leetcode.com/u/FARHANMN2000/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
              <TbBrandLeetcode size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          
          <button 
            onClick={handleScrollToAbout}
            className="mt-16 inline-flex items-center justify-center animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={28} className="text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;