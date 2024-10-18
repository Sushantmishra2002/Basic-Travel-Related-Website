import React, { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';

const PlanTrip: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Planning trip to:', destination, 'from', startDate, 'to', endDate);
    // For now, we'll just show an alert
    alert(`Planning your trip to ${destination} from ${startDate} to ${endDate}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Plan Your Trip</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destination"
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start-date">
            Start Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end-date">
            End Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            <Search className="mr-2" />
            Plan My Trip
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanTrip;