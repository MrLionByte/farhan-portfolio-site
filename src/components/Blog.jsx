import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        'https://gist.githubusercontent.com/MrLionByte/f8d4d8b982258cdc1097a0af05c3550d/raw/bf058cd3a68dd4a31e23672328cc16e8a8e0b94a/blogs.json'
      );
      setBlogPosts(response?.data || []);
    } catch (error) {
      console.error('Failed to load blog posts:', error);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blogs</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sharing my thoughts, experiences, and knowledge on Programming, Web development, IoT etc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <a 
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <div className="overflow-hidden h-60">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-100 dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.summary}
                </p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  Read Article <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            View All Articles
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
