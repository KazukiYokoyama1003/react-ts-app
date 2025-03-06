import React, { useState } from "react";
import CheckBoxComponent from "./search/CheckBoxComponent";
import RadioButtonComponent from "./search/RadioButtonComponent";
import TextFieldComponent from "./search/TextFieldComponent";
import PostButtonComponent from "./search/PostButtonComponent";
import ClearButtonComponent from "./search/ClearButtonComponent";

const Form: React.FC = () => {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState("");
  const [textValue, setTextValues] = useState("");
  const [isCleared, setIsCleared] = useState(false);

  const handleClear = () => {
    setCheckboxValues([]);
    setRadioValue("");
    setTextValues("");
    setTimeout(() => setIsCleared(false), 2000);
  };

  return (
    <div className="form-container">
      <h2>フォーム</h2>
      <div style={{ display:"flex" }}>
        <p style={{ padding:"2rem" }}>チェックボックス：</p>
        <CheckBoxComponent checkValues={checkboxValues} setCheckValues={setCheckboxValues} />
      </div>
      <div style={{ display: "flex", paddingLeft:"2rem" }}>
        <p style={{ margin: "0.5rem 3rem 0 0" }}>ラジオボタン：</p>
        <RadioButtonComponent radioValue={radioValue} setRadioValue={setRadioValue} />
      </div>
      <div style={{ display: "flex",paddingLeft:"2rem", marginTop: "2rem"}}>
        <p style={{ margin:"0.5rem 3rem 0 0" }}>テキストフィールド：</p>
        <TextFieldComponent textValues={textValue} setTextValue={setTextValues} />
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"2rem" }}>
        <PostButtonComponent />
        <ClearButtonComponent onClick={handleClear}/>
      </div>
    </div>
  );
};

export default Form;
