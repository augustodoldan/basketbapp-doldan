import "./App.css";
import NavBar from "./components/NavBar/index.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <h1 className="title-page">BASKETBAPP</h1>
        <h3>La página de compras donde siempre vas a sumar +3!</h3>
      </div>
    </div>
  );
}

export default App;
