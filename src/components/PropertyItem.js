import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './PropertyItem.css';

const PropertyItem = ({ property }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBookNow = () => {
    addToCart(property);
    navigate('/cart');
  };

  return (
    <Card className="property-item">
      <Card.Img variant="top" src={property.image} alt={property.title} />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>
          Location: {property.location} <br />
          Price: ₹{property.price} <br />
          Bedrooms: {property.bedrooms}
        </Card.Text>
        <Button onClick={handleBookNow} className="btn">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyItem;
