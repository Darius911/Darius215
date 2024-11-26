import { Routes, Route } from "react-router";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
