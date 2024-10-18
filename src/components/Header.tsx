import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Users, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Plane className="mr-2" />
          TravelBuddy
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/plan-trip" className="hover:text-blue-200 flex items-center">
                <Search className="mr-1" size={18} />
                Plan Trip
              </Link>
            </li>
            <li>
              <Link to="/find-buddy" className="hover:text-blue-200 flex items-center">
                <Users className="mr-1" size={18} />
                Find Travel Buddy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;