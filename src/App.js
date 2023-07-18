import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { Fender } from "./pages/product/Fender";
import { Fairing } from "./pages/product/Fairing";
import { Handelbar } from "./pages/product/Handelbar";
import { EngineCover } from "./pages/product/EngineCover";
import { Hornet } from "./pages/product/Hornet";
import { Exhaust } from "./pages/product/Exhaust";
import { Seat } from "./pages/product/Seat";
import { SwingArm } from "./pages/product/SwingArm";

function App() {
  return (
    <Router basename="/custom-kit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/fender" element={<Fender />}></Route>
        <Route path="/product/fairing" element={<Fairing />} />
        <Route path="/product/handlebar" element={<Handelbar />} />
        <Route path="/product/enginecover" element={<EngineCover />} />
        <Route path="/product/hornet" element={<Hornet />} />
        <Route path="/product/exhaust" element={<Exhaust />} />
        <Route path="/product/seat" element={<Seat />} />
        <Route path="/product/swingarm" element={<SwingArm />} />
      </Routes>
    </Router>
  );
}

export default App;
