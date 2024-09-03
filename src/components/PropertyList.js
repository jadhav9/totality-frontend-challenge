import React from 'react';
import PropertyItem from './PropertyItem';
import './PropertyList.css';

const PropertyList = ({ filters = {} }) => {
  const properties = [
    { id: 1, title: 'Cozy Apartment', price: 50000, location: 'Mumbai', bedrooms: 2, image: 'https://www.freepik.com/free-photo/spacious-room-with-big-window_968435.htm#fromView=search&page=1&position=1&uuid=55ab0997-8400-4481-a3cd-bd640cef7d77://via.placeholder.com/300x200?text=Cozy+Apartment' },
    { id: 2, title: 'Luxury Villa', price: 100000, location: 'Delhi', bedrooms: 4, image: 'https://via.placeholder.com/300x200?text=Luxury+Villa' },
    { id: 3, title: 'High Floor Apartment', price: 35000, location: 'Pune', bedrooms: 2, image: 'https://via.placeholder.com/300x200?text=High+Floor+Apartment' },
    { id: 4, title: 'Luxury Villa', price: 150000, location: 'Delhi', bedrooms: 3, image: 'https://via.placeholder.com/300x200?text=Luxury+Villa' },
    { id: 5, title: 'Luxury Apartment', price: 50000, location: 'Mumbai', bedrooms: 2, image: 'https://via.placeholder.com/300x200?text=Luxury+Apartment' },
    { id: 6, title: 'Condo', price: 55000, location: 'Pune', bedrooms: 3, image: 'https://via.placeholder.com/300x200?text=Condo' },
    { id: 7, title: 'Villa', price: 250000, location: 'Delhi', bedrooms: 6, image: 'https://via.placeholder.com/300x200?text=Villa' },
    { id: 8, title: 'Apartment', price: 50000, location: 'Mumbai', bedrooms: 3, image: 'https://via.placeholder.com/300x200?text=Apartment' },
    { id: 9, title: 'Villa', price: 250000, location: 'Mumbai', bedrooms: 3, image: 'https://via.placeholder.com/300x200?text=Villa' },
    { id: 10, title: 'Villa', price: 75000, location: 'Lonavala', bedrooms: 4, image: 'https://via.placeholder.com/300x200?text=Villa' },
    { id: 11, title: 'Luxury Villa', price: 150000, location: 'Lonavala', bedrooms: 3, image: 'https://via.placeholder.com/300x200?text=Luxury+Villa' },
    { id: 12, title: 'Apartment', price: 70000, location: 'Pune', bedrooms: 4, image: 'https://via.placeholder.com/300x200?text=Apartment' },
  ];

  const filteredProperties = properties.filter(property => {
    return (
      (!filters.location || property.location === filters.location) &&
      (!filters.price || property.price <= filters.price) &&
      (!filters.bedrooms || property.bedrooms >= filters.bedrooms)
    );
  });

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <div key={property.id}>
          <PropertyItem property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
