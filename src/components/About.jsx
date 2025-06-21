import { CodeIcon, UserIcon } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend',
      items: ['Python', 'Django', 'Django REST Framework', 'JWT Auth', 'Redis', 'Django Channels', 'Celery', 'FastAPI (Learning)'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Redux', 'Tailwind', 'Bootstrap'],
    },
    {
      category: 'Database & Messaging',
      items: ['PostgreSQL', 'MongoDB', 'Kafka', 'Redis', 'Firebase'],
    },
    {
      category: 'DevOps / Cloud',
      items: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'GCP (Kubernetes Cluster)', 'CI/CD'],
    },
    {
      category: 'IoT / Embedded',
      items: ['Arduino', 'Node MCU', 'Embedded C'],
    },
    {
      category: 'Tools & Utilities',
      items: ['Git', 'Nginx', 'Postman', 'Figma'],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know me and my professional journey
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Who I Am */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/10 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <UserIcon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                I’m a passionate, resilient, and responsible Full-Stack Developer with a strong foundation in Python, Django, React.js, and Microservices architecture. My journey began with an IoT project in college, which sparked my love for building real-world tech solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                I specialize in scalable backend systems using Kafka, Redis, RabbitMQ, Celery, and deploy to cloud with Docker and Kubernetes. I'm a lifelong learner who loves open-source, writing technical content, and solving problems with clean code.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/10 dark:border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <CodeIcon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-2">{skillGroup.category}</h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-700 dark:text-gray-400 flex items-center"
                      >
                        <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
