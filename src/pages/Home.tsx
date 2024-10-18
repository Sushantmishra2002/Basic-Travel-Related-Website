import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl text-gray-600 mb-8">Plan your trip and find travel buddies all in one place</p>
        <div className="flex justify-center space-x-4">
          <Link to="/plan-trip" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
            <MapPin className="mr-2" />
            Plan Your Trip
          </Link>
          <Link to="/find-buddy" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center">
            <Users className="mr-2" />
            Find a Travel Buddy
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Easy Trip Planning</h3>
          <p className="text-gray-600">Use our intuitive tools to plan your perfect trip, from flights to accommodations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Find Travel Companions</h3>
          <p className="text-gray-600">Connect with like-minded travelers and share unforgettable experiences together.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Share Rides & Costs</h3>
          <p className="text-gray-600">Split travel expenses and make your journey more affordable and fun.</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {['Paris', 'Tokyo', 'New York', 'Bali'].map((city) => (
            <div key={city} className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                src={`https://source.unsplash.com/featured/?${city}`}
                alt={city}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;