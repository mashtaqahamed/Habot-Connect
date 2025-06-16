import { Link } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';

function ProviderList({ providers, searchTerm }) {
  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row>
        {filteredProviders.map(provider => (
          <Col key={provider.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 provider-card shadow-sm">
              <Card.Body >
                <Card.Title>{provider.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{provider.specialization}</Card.Subtitle>
                <Card.Text>
                  <strong>Location:</strong> {provider.location}<br />
                  <strong>Rating:</strong> {provider.rating} ⭐
                </Card.Text>
                <Link to={`/providers/${provider.id}`} className="btn btn-outline-primary btn-sm">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProviderList;
