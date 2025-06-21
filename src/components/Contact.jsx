import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full animate-pulse"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              {[{
                icon: Mail,
                label: 'Email',
                value: 'fmahmoodn@gmail.com',
                link: 'mailto:fmahmoodn@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: 'unavailable',
                // link: 'tel:+1234567890',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Kerala, India',
              }].map(({ icon: Icon, label, value, link }, i) => (
                <div key={i} className="bg-white/80 dark:bg-gray-900/70 rounded-xl p-6 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start">
                    <Icon className="text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{label}</h3>
                      {link ? (
                        <a
                          href={link}
                          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Box */}
            <div className="md:col-span-3">
              <div className="bg-white/80 dark:bg-gray-900/70 rounded-xl p-8 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <p className="text-yellow-600 dark:text-yellow-400">
                    ⚠️ Message box under development.
                  </p>
                </div>

                {/* Uncomment below form block when ready */}
                {/* 
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    ...
                  </div>
                </form>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
