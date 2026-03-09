import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./component/pages/Home";
import Menu from "./component/pages/Menu";
import Reservation from "./component/pages/Reservation";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
