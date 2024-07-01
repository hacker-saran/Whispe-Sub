import React from 'react';

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-black bg-opacity-80 p-10 rounded-lg max-w-3xl text-justify">
        <h1 className="text-5xl font-bold mb-6 text-center">About Whispe Sub</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-bold text-blue-400">Whispe Sub</span>, the ultimate subtitle generation tool designed to make your video content more accessible and engaging. Our platform leverages advanced algorithms to extract audio from video files and generate accurate subtitle files, transcribing the video into text seamlessly.
        </p>
        <p className="text-lg mb-6">
          Whether you're a content creator, educator, or business professional, <span className="font-bold text-blue-400">Whispe Sub</span> provides the tools you need to reach a wider audience and improve accessibility. Our mission is to simplify the process of subtitle generation, making it quick, easy, and highly accurate.
        </p>
        <p className="text-lg mb-6">
          With <span className="font-bold text-blue-400">Whispe Sub</span>, you can:
        </p>
        <ul className="list-disc list-inside text-left mb-6">
          <li>Transcribe video content into text with high precision.</li>
          <li>Enhance the accessibility and reach of your video content.</li>
        </ul>
        <p className="text-lg mb-6">
          Join us on our journey to revolutionize the way subtitles are created. Make your content more inclusive and engaging with <span className="font-bold text-blue-400">Whispe Sub</span>.
        </p>
        <p className="text-lg">
          Thank you for choosing <span className="font-bold text-blue-400">Whispe Sub</span>. We are committed to providing you with the best subtitle generation experience.
        </p>
      </div>
    </div>
  );
}

export default About;