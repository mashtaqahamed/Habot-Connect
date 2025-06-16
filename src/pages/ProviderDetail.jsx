import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProviders } from '../api';
import { Container, Button } from 'react-bootstrap';

const ProviderDetail = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProviders().then((data) => {
      const found = data.find((p) => p.id === id);
      setProvider(found);
    });
  }, [id]);

  if (!provider) return <Container className="mt-4"><h2>Provider not found</h2></Container>;

  return (
    <Container className="mt-4">
      <h2>{provider.name}</h2>
      <p><strong>Specialization:</strong> {provider.specialization}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Rating:</strong> {provider.rating}</p>
      <p>{provider.longDescription}</p>
      <p><strong>Email:</strong> {provider.contactEmail}</p>
      <p><strong>Phone:</strong> {provider.phoneNumber}</p>
      <Link to="/"><Button variant="secondary">Back to List</Button></Link>
    </Container>
  );
};

export default ProviderDetail;