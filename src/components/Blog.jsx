import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        'https://api.myjson.online/v1/records/187df6d2-09f8-457c-abd4-f4bac5908ddb'
      );
      setBlogPosts(response?.data?.data || []);
    } catch (error) {
      console.error('Failed to load blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Blogs
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sharing my thoughts, experiences, and knowledge on programming, web development, IoT, and more.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full mb-2 shadow-md">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-300">
                    {post.date} <span className="mx-1">•</span> {post.readTime}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.summary}
                </p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium transition-all group-hover:translate-x-1">
                  Read Article <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
