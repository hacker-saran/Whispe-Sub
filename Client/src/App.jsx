import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import About from './components/About';
import Contact from './components/Contact';
import Result from './components/Result';
import { Link } from 'react-router-dom';

console.log('Rendering App.jsx');

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center p-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Whispe Sub</h1>
        <p className="text-xl mb-6">Subtitle generation made easy...</p>
        <div className="flex justify-center space-x-4">
          <Link to="/upload" className="py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-lg transition duration-300">
            Get Started
          </Link>
          <Link to="/about" className="py-3 px-6 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-bold rounded-lg transition duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;