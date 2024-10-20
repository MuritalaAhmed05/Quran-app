import React, { useState } from 'react';

const WheelOfNames = () => {
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [newName, setNewName] = useState('');

  const colors = [
    'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 
    'bg-purple-400', 'bg-pink-400', 'bg-teal-400', 'bg-orange-400'
  ];

  const handleAddName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  const spinTheWheel = () => {
    if (names.length > 0) {
      setSpinning(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setSelectedName(names[randomIndex]);
        setSpinning(false);
      }, 3000); // Spin for 3 seconds
    }
  };

  const calculateRotation = (index, total) => {
    return `rotate(${(360 / total) * index}deg)`;
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      {/* User Input */}
      <div className="flex space-x-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter a name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddName}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Name
        </button>
      </div>

      {/* Wheel */}
      <div className="relative flex items-center justify-center w-64 h-64 rounded-full border-4 border-gray-500">
        {names.map((name, index) => (
          <div
            key={index}
            className={`absolute w-1/2 h-full ${colors[index % colors.length]} text-center transform origin-bottom`}
            style={{
              transform: calculateRotation(index, names.length),
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)',
            }}
          >
            <div
              className="flex items-center justify-center w-full h-full text-white"
              style={{
                transform: `rotate(${(360 / names.length) / 2}deg)`, // Text rotation
              }}
            >
              {name}
            </div>
          </div>
        ))}

        {/* Spinning Overlay */}
        <div
          className={`absolute w-full h-full rounded-full border-4 border-gray-500 pointer-events-none transition-transform duration-3000 ease-in-out ${
            spinning ? 'animate-spin' : ''
          }`}
        />
      </div>

      {/* Spin Button */}
      <button
        onClick={spinTheWheel}
        disabled={spinning || names.length === 0}
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>

      {/* Display the Winner */}
      {selectedName && <h2 className="text-2xl font-bold">Winner: {selectedName}!</h2>}
    </div>
  );
};

export default WheelOfNames;
