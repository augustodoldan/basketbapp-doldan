import { Card, Button } from "react-bootstrap";
import "./Item.css";

export const Item = ({ item, stock }) => {
  const { title, price, pictureUrl } = item;
  return (
    <div>
      <Card className="main-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Text>${price}</Card.Text>
          <Button variant="primary">Ver detalles del producto</Button>
        </Card.Body>
        <Card.Footer>
          <small>Stock disponible: {stock}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Item;
