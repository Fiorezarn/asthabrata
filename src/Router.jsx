import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/App";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
