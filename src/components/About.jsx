import { CodeIcon, UserIcon, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend',
      items: ['Python', 'Django', 'Django REST Framework', 'JWT Auth', 'Redis', 'Django Channels', 'Celery', 'FastAPI (Learning)']
    },
    {
      category: 'Frontend',
      items: ['React', 'Redux', 'Tailwind', 'Bootstrap']
    },
    {
      category: 'Database & Messaging',
      items: ['PostgreSQL', 'MongoDB', 'Kafka', 'Redis', 'Firebase']
    },
    {
      category: 'DevOps / Cloud',
      items: ['Docker', 'Kubernetes', 'AWS (EC2, S3)', 'GCP (Kubernetes Cluster)', 'CI/CD']
    },
    {
      category: 'IoT / Embedded',
      items: ['Arduino', 'Node MCU', 'Embedded C']
    },
    {
      category: 'Tools & Utilities',
      items: ['Git', 'Nginx', 'Postman', 'Figma']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know me and my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <UserIcon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                 I’m a passionate, resilient, and responsible Full-Stack Developer with a strong foundation in Python, Django, React.js, and Microservices architecture. But that doesn't limit me,  I’m always eager to learn and grow. As a self-learner, my journey began with an IoT-based project in college, which ignited my passion for software development and set me on a path of continuous hands-on learning.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in building scalable backend systems, integrating services like Kafka, Redis, RabbitMQ, Celery, and deploying with Docker and Kubernetes on AWS or GCP. I thrive in fast-paced environments, love exploring new technologies, and enjoy contributing to open-source, writing technical content, and solving real-world problems through code.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md mt-6 transition-all duration-300 hover:shadow-lg">
              {/* <div className="flex items-center mb-4">
                <GraduationCap className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-gray-800 dark:text-gray-200 font-medium">Diploma in EEE</h4>
                <p className="text-gray-600 dark:text-gray-400">SSMPTC Tirur • 2019-2022</p>
              </div>
              <div>
                <h4 className="text-gray-800 dark:text-gray-200 font-medium">Bachelor's in Electrical Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">University Name • 2014-2018</p>
              </div> */}
            </div>
          </div>
          
          <div>
            {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-gray-800 dark:text-gray-200 font-medium">Senior Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Tech Company • 2020-Present</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Leading web and IoT development projects, mentoring junior developers, and 
                  implementing best practices across the development team.
                </p>
              </div>
              <div>
                <h4 className="text-gray-800 dark:text-gray-200 font-medium">IoT Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">IoT Startup • 2018-2020</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Developed smart home solutions and industrial IoT monitoring systems using
                  embedded devices, cloud infrastructure, and web applications.
                </p>
              </div>
            </div> */}

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md mt-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <CodeIcon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-2">{skillGroup.category}</h4>
                    <ul className="space-y-1">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                          <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
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
      </div>
    </section>
  );
};

export default About;