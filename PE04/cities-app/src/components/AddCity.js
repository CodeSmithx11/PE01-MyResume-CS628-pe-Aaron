// src/components/AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddCity({ onAddCity }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !country || !population) {
      alert('Please fill in all fields');
      return;
    }

    const newCity = {
      id: Date.now().toString(),
      name,
      country,
      population: parseInt(population, 10),
    };

    // Call the onAddCity function to update state
    onAddCity(newCity);

    // Redirect to the new city's details page
    navigate(`/cities/${newCity.id}`);
  };

  return (
    <div className="page-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Population:
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;



