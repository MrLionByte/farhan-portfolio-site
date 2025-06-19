import { Github, Linkedin, Twitter, Flame } from 'lucide-react';

const Footer = () => {  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">Farhan Mahmood N</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate web and IoT developer creating innovative solutions 
              that bridge the gap between idea and product, hardware and software.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {/* <li>Address</li> */}
              <li>fmahmoodn@gmail.com</li>
              {/* <li>+1 (234) 567-890</li> */}
            </ul>
            <div className="flex space-x-4 mt-5">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} farhanmn. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-start gap-2 text-sm text-gray-300">
            <Flame size={20} color="#c23838" strokeWidth={3} className="mt-0.5" />
            <div className="space-y-1">
              <p>Dreams fuel the growth, fear ignites the boosters,</p>
              <p>Resilience clears the road and self-work builds the machine.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;