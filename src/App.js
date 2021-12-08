import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const title = "BASKETBAPP";
  const subtitle = "La página de compras donde siempre vas a sumar +3!";
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ItemListContainer greeting={title} subtitle={subtitle} />
      </div>
    </div>
  );
}

export default App;
