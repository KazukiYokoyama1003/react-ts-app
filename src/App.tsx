import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Component from "./pages/Component";
import ButtonComponent from "./pages/ButtonComponent";
import CheckBoxComponent from "./pages/CheckBoxComponent";
import RadioButtonComponent from "./pages/RadioButtonComponent";
import SelectBoxComponent from "./pages/SelectBoxComponent";
import SwitchComponent from "./pages/SwitchComponent";
import TextFieldComponent from "./pages/TextFieldComponent";
import TooltipComponent from "./pages/TooltipComponent.tsx";
import TableComponent from "./pages/TableComponent";
import PaginationComponent from "./pages/PaginationComponent.tsx";
import ModalComponent from "./pages/ModalComponent";
import DialogComponent from "./pages/DialogComponent";
import AccordionComponent from "./pages/AccordionComponent.tsx";
import CardComponent from "./pages/CardComponent.tsx";
import MenuComponent from "./pages/MenuComponent.tsx";
import SpinnerComponent from "./pages/SpinnerComponent.tsx";
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
          <Route path="/component/selectbox" element={<SelectBoxComponent />} />
          <Route path="/component/switch" element={<SwitchComponent />} />
          <Route path="/component/textfield" element={<TextFieldComponent />} />
          <Route path="/component/tooltip" element={<TooltipComponent />} />
          <Route path="/component/table" element={<TableComponent />} />
          <Route path="/component/pagination" element={<PaginationComponent />} />
          <Route path="/component/modal" element={<ModalComponent />} />
          <Route path="/component/dialog" element={<DialogComponent />} />
          <Route path="/component/accordion" element={<AccordionComponent />} />
          <Route path="/component/card" element={<CardComponent />} />
          <Route path="/component/menu" element={<MenuComponent />} />
          <Route path="/component/spinner" element={<SpinnerComponent />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;