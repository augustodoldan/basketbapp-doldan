import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetail from "./pages/ItemDetail";
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<CategoryList />} />
        <Route exact path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
