import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 Replace with your Google Sheets endpoint (Google Apps Script Web App URL)
    const endpoint = 'https://script.google.com/macros/s/AKfycbxzgQj6xg6FB-7iiU5xufAhJapUxFkMn_QKFwqZJdSwoNaqtox07r5sVg7oa5Myv0G-4w/exec';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors', // Because Google Apps Script doesn't return proper CORS headers
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      toast.success('Thanks! We will contact you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      toast.error('Submission failed. Please try again later.');
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400  text-4xl mb-4">Contact Me</p>
            <h2 className="text-xl font-bold mb-8">LET'S TALK ABOUT YOUR PROJECT</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's embark on a creative journey together by building something extraordinary.
              Whether it's a website, mobile app, or digital project — I'm excited to collaborate with you and bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="../../public/batman.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Contact Information</p>
                  <p className="text-white">+91 8465048210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">PREFER EMAIL COMMUNICATION</p>
                  <a href='mailto:vinayreddyd4466@gmail.com' className="text-white">vinayreddyd4466@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Message in brief..."
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
