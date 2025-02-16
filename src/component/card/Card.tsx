import React from "react";
import "./card.sass";

const Card: React.FC<{ title: string; header: string; subtitle: string; explanation: string; action: string }> = ({ 
  title, header, subtitle, explanation, action
}) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-header">{header}</div>
      <div className="card-subtitle">{subtitle}</div>
      <div className="card-explanation">{explanation}</div>
      <div className="card-action">
        <button className="card-button">{action}</button>
      </div>
    </div>
  );
};

export default Card;
