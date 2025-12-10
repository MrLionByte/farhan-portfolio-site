import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Scripts from './components/Scripts';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (value) =>{
    setActiveSection(value)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero navigateToAbout={handleNavigate} />
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      // case 'scripts':
      //   return <Scripts />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        );
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-gray-900 transition-all duration-500">
        <Header 
          scrolled={scrolled} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="relative">
          {renderActiveSection()}
        </main>
        <Footer />
      </div>
  );
}

export default App;