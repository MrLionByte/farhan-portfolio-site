import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header = ({ scrolled, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleNavLinkClick = (section) => {
    setIsMenuOpen(false);
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300 shadow-xl backdrop-blur-md border
        ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 border-emerald-200/20 dark:border-emerald-800/40'
            : 'bg-white/70 dark:bg-gray-800/80 border-white/10'
        }`}
      >
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-emerald-100/20 dark:hover:bg-emerald-900/40 transition"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Nav Items - Desktop */}
        <nav className="hidden md:flex space-x-3 px-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavLinkClick(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-2 group
                ${
                  activeSection === id
                    ? 'text-emerald-500 dark:text-emerald-400'
                    : 'text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400'
                }`}
            >
              {Icon && <Icon size={16} />}
              <span>{label}</span>
              {activeSection === id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Nav Items */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg backdrop-blur border border-emerald-200/30 dark:border-emerald-800/30 transition-all duration-300">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavLinkClick(id)}
              className={`flex w-full items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeSection === id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/30'
                }`}
            >
              {Icon && <Icon size={18} />}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
