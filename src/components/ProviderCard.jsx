import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProviderCard = ({ provider }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{provider.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{provider.specialization}</Card.Subtitle>
      <Card.Text>
        <strong>Location:</strong> {provider.location}<br />
        <strong>Rating:</strong> {provider.rating}
      </Card.Text>
      <Link to={`/providers/${provider.id}`}><Button variant="primary">View Details</Button></Link>
    </Card.Body>
  </Card>
);

export default ProviderCard;