import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlanTrip from './pages/PlanTrip';
import FindTravelBuddy from './pages/FindTravelBuddy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan-trip" element={<PlanTrip />} />
            <Route path="/find-buddy" element={<FindTravelBuddy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;