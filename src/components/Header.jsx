import { useState } from 'react';
import { Menu, X, Moon, Sun, Home } from 'lucide-react';

const Header = ({ scrolled, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    // { id: 'scripts', label: 'Scripts' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
        ? 'bg-white/95 dark:bg-gray-900 backdrop-blur-md shadow-lg border-b border-emerald-100 dark:border-emerald-800/30 py-3' 
        : 'bg-white/80 dark:bg-gray-900 backdrop-blur-sm py-5'}`}
        >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavLinkClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-400 dark:to-teal-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
          >
            Portfolio
          </button>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavLinkClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group
                    ${activeSection === item.id 
                      ? 'dark:text-emerald-400 text-gray-600 hover:text-indigo-60 shadow-sm' 
                      : 'text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-slate-500 dark:hover:bg-slate-800'
                    }`}
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  )}
                </button>
              );
            })} 
          </nav>
        </div>
        

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl border border-emerald-100 dark:border-emerald-800/30">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavLinkClick(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left
                      ${activeSection === item.id 
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' 
                        : 'text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20'
                      }`}
                  >
                    {Icon && <Icon size={18} />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;