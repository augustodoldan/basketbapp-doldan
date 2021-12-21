import "./App.css";
import { useEffect, useState } from "react";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  const title = "BASKETBAPP";
  const subtitle = "La página de compras donde siempre vas a sumar +3!";
 
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ItemListContainer
          greeting={title}
          subtitle={subtitle}
          items={items}
          setItems={setItems}
          products={products}
        />
      </div>
      <div>
        <ItemDetailContainer setProducts={setProducts} products={products} />
      </div>
    </div>
  );
}

export default App;
