import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { ProductOne } from "./pages/product/ProductOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/productone" element={<ProductOne />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
