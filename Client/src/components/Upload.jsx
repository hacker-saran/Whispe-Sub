import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('video', file);

    setUploading(true);
    axios.post('http://127.0.0.1:5000/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percentCompleted);
      }
    })
      .then(res => {
        setUploading(false);
        setMessage({ text: 'Video uploaded, Processing Please wait..!', type: 'success' });
        setTimeout(() => {
          setMessage(null);
          navigate('/result', { state: { filename: res.data.filename } });
        }, 3000);
      })
      .catch(err => {
        console.error(err);
        setUploading(false);
        setMessage({ text: 'Upload failed!', type: 'error' });
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {message && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="absolute top-20 p-8 rounded-lg shadow-lg bg-black text-center">
            <h2 className={`text-2xl font-bold mb-4 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message.text}
            </h2>
          </div>
        </div>
      )}
      <div className="bg-black bg-opacity-50 shadow-lg rounded-lg p-8 w-full max-w-md mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Upload Video</h2>
        <div className="mb-4">
          <input 
            type="file" 
            accept="video/*" 
            onChange={handleFileChange} 
            ref={fileInputRef}
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current.click()} 
            className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-lg transition duration-300"
          >
            {file ? file.name : 'Choose File'}
          </button>
        </div>
        <button 
          onClick={handleUpload} 
          className={`w-full py-3 px-4 rounded-lg text-white font-bold transition duration-300 ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600'}`}
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {uploading && (
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;