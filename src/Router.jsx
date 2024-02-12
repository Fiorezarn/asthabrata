import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/App";
import About from "./Page/About/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
