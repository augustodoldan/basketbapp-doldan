import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, subtitle }) => {
  const [stock, setStock] = useState(10);
  const [productNumber, setProductNumber] = useState("");
  const [items, setItems] = useState([]);

  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        setItems([
          {
            id: 1,
            title: "Harden Vol. 5 Futurenatural Shoes",
            price: 45000,
            pictureUrl:
              "https://www.highsnobiety.com/static-assets/thumbor/1or6Ndgd7ytOaMv0DKt2oou2_AM=/1500x1000/whatdropsnow.s3.amazonaws.com/product_image/180297/shrine_image/8ebea55765d2a404caba66c29dbc607e.jpg",
          },
          {
            id: 2,
            title: "N3xt L3v3l Supernatural Shoes",
            price: 52000,
            pictureUrl:
              "https://www.highsnobiety.com/static-assets/thumbor/SDeP3FEqmwoXvoNpqaZWv_HCP-I=/1500x1000/whatdropsnow.s3.amazonaws.com/product_image/180299/shrine_image/72ecdb4cd2a442fe7024d99da0facfd9.jpg",
          },
          {
            id: 3,
            title: "Curry Flow 8",
            price: 68000,
            pictureUrl:
              "https://www.highsnobiety.com/static-assets/thumbor/loQqi6HHDv2W0zVgFG88vYeiW1w=/1500x1000/whatdropsnow.s3.amazonaws.com/product_image/180306/shrine_image/1a449858781be09f1ee11e627b4d0a6d.jpg",
          },
        ])
      );
    }, 2000);
  });

  const onAdd = (count) => {
    if (stock === 0) {
      return false;
    }
    setProductNumber(count);
  };
  return (
    <div className="container-ItemListContainer">
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
      <div className="Itemlist-component">
        <ItemList items={items} stock={stock}/>
      </div>
    </div>
  );
};

export default ItemListContainer;
