// src/components/CityDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function CityDetails({ cities }) {
  const { id } = useParams();
  const city = cities.find((c) => c.id === id);

  if (!city) {
    return (
      <div className="not-found">
        <strong>City Not Found</strong>
        <p>The city does not exist in the list.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>City Details</h2>
      <h3>{city.name}</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
    </div>
  );
}

export default CityDetails;
