import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      location,
      price,
      bedrooms,
    });
  };

  return (
    <Form className="filter">
      <div className="row">
        <div className="col-md-4">
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Location" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
            />
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group>
            <Form.Control 
              type="number" 
              placeholder="Max Price" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            />
          </Form.Group>
        </div>
        <div className="col-md-4">
          <Form.Group>
            <Form.Control 
              type="number" 
              placeholder="Bedrooms" 
              value={bedrooms} 
              onChange={(e) => setBedrooms(e.target.value)} 
            />
          </Form.Group>
        </div>
      </div>
      <br></br>
      <Button onClick={handleFilterChange} className="btn">Apply Filters</Button>
    </Form>
  );
};

export default Filter;
