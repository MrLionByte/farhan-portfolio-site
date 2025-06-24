import { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, Github, FileText } from 'lucide-react';

const categoryMap = {
  Web: 'web',
  'Web (Mini)': 'web-mini-projects',
  IoT: 'iot',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Web');

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

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A selection of my web development and IoT projects
          </p>

          {/* Filter Tabs */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              {/* Project Image */}
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

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Links */}
                <div className="flex justify-between items-center">
                  {(project.demoUrl || project.demoVideo) && (
                    <>
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Live Demo <ExternalLink size={14} className="ml-1" />
                        </a>
                      ) : (
                        <a
                          href={project.demoVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Live Video <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </>
                  )}

                  {project.codeUrl || project.reportUrl && (
                    <>
                    {project.codeUrl ? 
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Code <Github size={14} className="ml-1" />
                    </a>
                    :
                    <a
                      href={project.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Report <FileText size={14} className="ml-1" />
                    </a>
                    }
                    </>
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
