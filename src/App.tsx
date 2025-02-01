import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Component from "./pages/Component";
import ButtonComponent from "./pages/ButtonComponent";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/component">コンポーネント</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/component" element={<Component />} />
        <Route path="/component/button" element={<ButtonComponent />} />
      </Routes>
    </Router>
  );
}

export default App;

