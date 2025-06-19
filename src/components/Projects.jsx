import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github } from 'lucide-react';

const categoryMap = {
  Web: 'web',
  'Web (Mini)': 'web-mini-projects',
  IoT: 'iot',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Web'); // Default button label

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://gist.githubusercontent.com/MrLionByte/f8d4d8b982258cdc1097a0af05c3550d/raw/bd8a101c68a38f48195a7103a84c8fd57e58e89e/projects.json'
        );
        
        const allProjects = response.data;
        console.log(response);
        
        const validCategories = Object.values(categoryMap);
        const filtered = allProjects?.filter(project =>
          validCategories.includes(project.category)
        );
        setProjects(filtered);
      } catch (error) {
        console.error('Failed to load project data:', error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects?.filter(
    project => project.category === categoryMap[filter]
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A selection of my web development and IoT projects
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-sm">
              {Object.keys(categoryMap).map((label) => (
                <button
                  key={label}
                  onClick={() => setFilter(label)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === label
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs px-2 py-1 m-2 rounded-md">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.slice(0, 3)?.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md mr-2 mb-2">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      Live Demo <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Code <Github size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
