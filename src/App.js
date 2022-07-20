import Products from "./components/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
