
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 mb-4">Contact Me</p>
            <h2 className="text-5xl font-bold mb-8">
              LET'S TALK ABOUT YOUR PROJECT
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's embark on creative journey together by shaping a visual 
              narrative of your brand in the crowded digital space.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">BOOK A CALL</p>
                  <p className="text-white">+1800 23 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">PREFER EMAIL COMMUNICATION</p>
                  <p className="text-white">hello@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Message in brief..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                ></textarea>
              </div>
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
