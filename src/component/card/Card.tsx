import React from "react";
import "./card.sass";
import { CardProps } from "./interface";

const Card: React.FC<CardProps> = ({ title, header, subtitle, explanation, action }) => {
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
