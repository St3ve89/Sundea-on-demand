import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  const handleChange = (ev) => {
    updateItemCount(name, ev.target.checked ? 1 : 0);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Col xs="5">
          <Form.Check onChange={handleChange} type="checkbox" label={name} />
        </Col>
      </Form.Group>
    </Col>
  );
}
