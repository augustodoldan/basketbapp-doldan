import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [stock, setStock] = useState(10);
  const [productNumber, setProductNumber] = useState("");

  const onAdd = (count) => {
    if (stock === 0) {
      return false;
    }
    setProductNumber(count);
  };

  const { greeting, subtitle } = props;
  return (
    <div>
      <h1 className="title-page">{greeting}</h1>
      <h3 className="subtitle-page">{subtitle}</h3>
      <ItemCount
        initial={1}
        stock={stock}
        onAdd={onAdd}
        setProductNumber={setProductNumber}
      />
  <div className="product-legend">
      {productNumber <= 0 ? (
        <p>No agregaste ningún producto a tu carrito</p>
      ) : (
        <p>Agregaste {productNumber} productos a tu carrito!</p>
      )}
      </div>
    </div>
  );
};

export default ItemListContainer;
