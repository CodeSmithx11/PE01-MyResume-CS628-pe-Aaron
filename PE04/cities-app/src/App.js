// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddCity from './components/AddCity';
import CitiesList from './components/CitiesList';
import CityDetails from './components/CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    { id: '1', name: 'Seattle', country: 'USA', population: 733919 },
  ]);

  // Function to add a new city
  const handleAddCity = (newCity) => {
    setCities([...cities, newCity]);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/add-city" element={<AddCity onAddCity={handleAddCity} />} />
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
          <Route path="*" element={<div className="not-found">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
