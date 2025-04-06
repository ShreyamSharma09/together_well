import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';

const TrackDisease = () => {
  const [graphs, setGraphs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGraphs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://192.168.147.49:5000/api/health-graphs');
      const { encoded_graphs } = response.data;

      const formattedGraphs = Object.entries(encoded_graphs).map(([name, base64]) => ({
        name,
        src: `data:image/png;base64,${base64}`,
      }));

      setGraphs(formattedGraphs);
    } catch (err) {
      setError('Failed to fetch health graphs.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-6">
      <NavBar />
      <div className="max-w-5xl mx-auto mt-32 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 drop-shadow-md">
          Track Your Health Progress
        </h1>

        <button
          onClick={fetchGraphs}
          className="bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          Generate Health Graphs
        </button>

        {loading && <p className="mt-4 text-lg text-gray-600">Loading graphs...</p>}
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {graphs.map((graph, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/30"
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-700">{graph.name}</h2>
              <img
                src={graph.src}
                alt={graph.name}
                className="rounded-xl w-full h-auto object-contain shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackDisease;