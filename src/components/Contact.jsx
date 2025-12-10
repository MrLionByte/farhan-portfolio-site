import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';

const CONTACT_ENDPOINT = 'https://portfolio-contact-link.vercel.app/api/discord-contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); 

    if (!formData.message) {
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        message: "Please include a message in the field.",
      });
      return;
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', linkedin: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          success: false,
          message: errorData.error || 'Oops! An unknown error occurred while sending the message.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error: Could not connect to the server. Please try again later.',
      });
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white via-white/60 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 min-h-screen" // Use min-h-screen
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
          <div className="grid md:grid-cols-5 gap-8 items-stretch"> 
            
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
                value: '+91 70345 88564',
                link: 'tel:+917034588564',
              },
              ].map(({ icon: Icon, label, value, link }, i) => (
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

            <div className="md:col-span-3"> 
              <div className="bg-white/80 dark:bg-gray-900/70 rounded-xl p-8 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between">
                <div>
                  {submitStatus && (
                    <div
                      className={`p-4 mb-4 rounded-lg flex items-center ${
                        submitStatus.success
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}
                    >
                      {submitStatus.success ? <CheckCircle className="w-5 h-5 mr-3" /> : <XCircle className="w-5 h-5 mr-3" />}
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Your Name" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="your@email.com" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="555-555-5555 " 
                        />
                      </div>
                      <div>
                        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LinkedIn Profile URL</label>
                        <input 
                          type="url" 
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Optional" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message *</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        disabled={isSubmitting}
                        className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                        placeholder="I'd love to discuss..."
                      />
                    </div>
                  </form>
                </div>
                
                <button 
                  type="submit"
                  form="contactForm"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 mt-6 ${ // Added mt-6 for separation
                    isSubmitting
                      ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400'
                  } text-white shadow-md hover:shadow-lg`}
                  onClick={handleSubmit} 
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
