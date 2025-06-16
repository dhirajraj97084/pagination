import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagination1 from "./component/Pagination1";
import Pagination2 from "./component/Pagination2";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination1" element={<Pagination1 />} />
         <Route path="/pagination2" element={<Pagination2 />} />
      </Routes>
    </Router>
  );
}

export default App;
