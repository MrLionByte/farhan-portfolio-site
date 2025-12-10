import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github, FileText, X } from 'lucide-react';

const categoryMap = {
  Web: 'web',
  'Web (Mini)': 'web-mini-projects',
  IoT: 'iot',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Web');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://api.myjson.online/v1/records/d4103162-7a3c-417e-adad-60f58da57b2f'
        );
        
        const allProjects = response.data.data;
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
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const Modal = ({ project, onClose }) => {
      if (!project) return null;

      const mainLink = project.demoUrl || project.demoVideo;
      const mainLinkText = project.demoUrl ? 'Live Demo' : 'Live Video';
      
      const secondaryLink = project.codeUrl || project.reportUrl;
      const secondaryLinkText = project.codeUrl ? 'Source Code' : 'Full Report';
      const secondaryLinkIcon = project.codeUrl ? Github : FileText;

      return (
          <div 
              className={`fixed inset-0 z-50 overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
              onClick={onClose} 
          >
              <div 
                  className="flex items-center justify-center min-h-screen p-4"
                  onClick={(e) => e.stopPropagation()}
              >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative transition-all duration-300 transform scale-100 opacity-100">
                      
                      <button
                          onClick={onClose}
                          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 z-10 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg"
                      >
                          <X size={24} />
                      </button>

                      <div className="relative h-96 overflow-hidden rounded-t-xl">
                          <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover" 
                          />
                      </div>

                      <div className="p-8">
                          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                              {project.title}
                          </h3>
                          
                          <div className="flex flex-wrap mb-4">
                              {project.tags?.map((tag) => (
                                  <span
                                      key={tag}
                                      className="text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full mr-2 mb-2 font-medium"
                                  >
                                      {tag}
                                  </span>
                              ))}
                          </div>

                          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
                              {project.description}
                          </p>
                          
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
                              Project Links
                          </h4>
                          <div className="flex flex-wrap gap-4">
                              {mainLink && (
                                  <a
                                      href={mainLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
                                  >
                                      {mainLinkText} <ExternalLink size={16} className="ml-2" />
                                  </a>
                              )}

                              {secondaryLink && (
                                  <a
                                      href={secondaryLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                  >
                                      {secondaryLinkText} <secondaryLinkIcon size={16} className="ml-2" />
                                  </a>
                              )}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A selection of my web development and IoT projects
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 p-1 shadow-lg">
              {Object.keys(categoryMap).map((label) => (
                <button
                  key={label}
                  onClick={() => setFilter(label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${filter === label
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-900 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
              onClick={() => handleProjectClick(project)} 
              className="rounded-2xl overflow-hidden cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs px-2 py-1 m-2 rounded-md shadow-sm">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap mb-4">
                  {project.tags.slice(0, 3)?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md mr-2 mb-2">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">Click to view full details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Modal project={selectedProject} onClose={handleCloseModal} />
      
    </section>
  );
};

export default Projects;