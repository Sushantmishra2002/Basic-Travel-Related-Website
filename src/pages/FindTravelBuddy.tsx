import React, { useState } from 'react';
import { Search, Users } from 'lucide-react';

const FindTravelBuddy: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Searching for travel buddies to:', destination, 'during', travelDates);
    // For now, we'll just show an alert
    alert(`Searching for travel buddies to ${destination} during ${travelDates}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Find a Travel Buddy</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
            Destination
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="travel-dates">
            Travel Dates
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="travel-dates"
            type="text"
            placeholder="e.g., June 15-30, 2024"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            <Users className="mr-2" />
            Find Travel Buddies
          </button>
        </div>
      </form>

      {/* Placeholder for search results */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Potential Travel Buddies</h2>
        <p className="text-gray-600">Search results will appear here after you submit the form.</p>
      </div>
    </div>
  );
};

export default FindTravelBuddy;