import { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

const Scripts = () => {
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const response = await axios.get(
          'https://api.myjson.online/v1/records/2169004c-51ff-416e-a7fb-42acaa131440'
        );
        console.log(response.data.length);
        
        setScripts((response.data.data.length > 1) ? response.data.data : null);
      } catch (error) {
        console.error('Failed to load scripts:', error);
      }
    };

    fetchScripts();
  }, []);

  return (
    <section id="scripts" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Automation Scripts</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A curated collection of scripts and utilities I've built to automate tasks, process data, and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scripts?.map((script) => (
            <a 
              key={script.id}
              href={script.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-gray-800"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full mb-2">
                  {script.language}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {script.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {script.summary}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{script.date}</span>
                </div>
                <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  View Script <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/scripts"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Explore All Scripts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Scripts;
