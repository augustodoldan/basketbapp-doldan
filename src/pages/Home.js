import "../App.css";
import { useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
  const [items, setItems] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const title = "BASKETBAPP";
  const subtitle = "La página de compras donde siempre vas a sumar +3!";

  return (
    <div className="App">
      <div className="container">
        <ItemListContainer
          greeting={title}
          subtitle={subtitle}
          items={items}
          setItems={setItems}
          categorias={categorias}
        />
      </div>
    </div>
  );
};

export default Home;
