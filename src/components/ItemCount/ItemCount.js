import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd, setProductNumber }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, []);

  const handleClickIncrease = () => {
    if (stock === 0) {
      return false;
    } else if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleClickDecrease = () => {
    if (stock === 0) {
      return false;
    } else if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="container-itemCount">
      <div className="product-itemCount">
        <h3>camisa tiger</h3>
      </div>
      <div className="product-controller">
        <Button
          size="sm"
          className="buttons-itemCount"
          onClick={handleClickDecrease}
        >
          -
        </Button>
        {stock === 0 ? <p className="text-stock"> sin stock</p> : <p className="text-stock">{count}</p>}
        <Button
          size="sm"
          className="buttons-itemCount"
          onClick={handleClickIncrease}
        >
          +
        </Button>
      </div>
      <div className="add-button-itemCount">
        <Button size="sm" id="add-itemCount" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
