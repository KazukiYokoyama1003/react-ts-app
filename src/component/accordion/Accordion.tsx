import React, { useState } from "react";
import "./accordion.sass";

const Accordion: React.FC<{ title: string; content: string; isArrow: boolean}> = ({ title, content, isArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          {isArrow == true ?  "↓" : "▼"}
        </span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;