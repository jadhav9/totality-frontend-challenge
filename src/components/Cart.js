import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <ListGroup variant="flush">
        {cartItems.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.title}</h5>
              <p>${item.price} per night</p>
            </div>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mt-4">
        <h4>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</h4>
      </div>
    </div>
  );
};

export default Cart;
