import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Component from "./pages/Component";
import ButtonComponent from "./pages/ButtonComponent";
import CheckBoxComponent from "./pages/CheckBoxComponent";
import RadioButtonComponent from "./pages/RadioButtonComponent";
import SelectBoxComponent from "./pages/SelectBoxComponent";
import SwitchComponent from "./pages/SwitchComponent";
import TextFieldComponent from "./pages/TextFieldComponent";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <Router>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </header>

      <nav>
        <ul>
          <li><Link to="/component">コンポーネント</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/component" element={<Component />} />
          <Route path="/component/button" element={<ButtonComponent />} />
          <Route path="/component/checkbox" element={<CheckBoxComponent />} />
          <Route path="/component/radiobutton" element={<RadioButtonComponent />} />
          <Route path="/component/textfield" element={<TextFieldComponent />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;