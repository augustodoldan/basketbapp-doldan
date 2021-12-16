import { Card, Button } from "react-bootstrap";
import "./Item.css";

export const Item = ({ item, stock }) => {
  const { title, price, pictureUrl } = item;
  return (
    <div className="main-card">
      <Card className="card-component">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Text className="price-card">${price}</Card.Text>
          <Button className="button-card">Ver detalles del producto</Button>
          <Card.Footer>
            <small>Stock disponible: {stock}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
