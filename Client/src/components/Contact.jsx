import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help.
        </p>
        <div className="mb-6">
          <p className="text-lg font-bold ">Email: rsaran2424@gmail.com</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/rsaran24/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/hacker-saran" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.skillrack.com/faces/resume.xhtml?id=308887&key=c2a0c918a89fc1ad3a82539b2a789a7745df74ff" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faBitbucket} size="2x" />
          </a>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-left text-white mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded-lg bg-white bg-opacity-80 text-gray-800" />
          </div>
          <div>
            <label className="block text-left text-white mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded-lg bg-white bg-opacity-80 text-gray-800" />
          </div>
          <div>
            <label className="block text-left text-white mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full p-2 rounded-lg bg-white bg-opacity-80 text-gray-800" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;