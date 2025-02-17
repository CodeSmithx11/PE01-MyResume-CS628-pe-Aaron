// src/components/CitiesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function CitiesList({ cities }) {
  return (
    <div>
      <h2 className="section-title">Cities List</h2>
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <div key={index}>
            <Link to={`/cities/${city.name}`} className="city-link">
              {city.name}
            </Link>
          </div>
        ))
      ) : (
        <p>No cities added yet. Click "Add City" to create one.</p>
      )}
    </div>
  );
}

export default CitiesList;

