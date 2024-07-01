import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { filename } = location.state || {};
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (filename) {
      axios.get(`http://127.0.0.1:5000/result?filename=${filename}`)
        .then(res => {
          setResponse(res.data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch the result');
          setLoading(false);
        });
    } else {
      setError('No filename provided');
      setLoading(false);
    }
  }, [filename]);

  const downloadSRT = () => {
    if (!response) return;

    const srtContent = response.map((segment, index) => {
      const start = new Date(segment.start * 1000).toISOString().substr(11, 12).replace('.', ',');
      const end = new Date(segment.end * 1000).toISOString().substr(11, 12).replace('.', ',');
      return `${index + 1}\n${start} --> ${end}\n${segment.text}\n`;
    }).join('\n');

    const blob = new Blob([srtContent], { type: 'text/srt' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename || 'transcription'}.srt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-80 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Transcription Result</h2>
        {loading && <p className="text-center text-gray-700">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {response && (
          <>
            <div className="flex justify-center mt-4">
              <button
                onClick={downloadSRT}
                className="py-1 px-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-lg transition duration-300"
              >
                Download SRT
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mt-2 text-gray-700">
              {response.map((segment, index) => (
                <p key={index} className="whitespace-pre-wrap mb-2">{segment.text}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;