import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  const handleCheckout = (e) => {
    e.preventDefault();
    // Handle checkout logic
  };

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <Form onSubmit={handleCheckout}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Credit Card Number" required />
        </Form.Group>
        <Button variant="success" type="submit">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutPage;
