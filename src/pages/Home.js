import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';
import './Home.css';

const Home = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-container">
      <Filter onFilterChange={handleFilterChange} />
      <PropertyList filters={filters} />
    </div>
  );
};

export default Home;
