import React, { useState } from "react";
import CheckBoxComponent from "./search/CheckBoxComponent";
import RadioButtonComponent from "./search/RadioButtonComponent";
import TextFieldComponent from "./search/TextFieldComponent";
import PostButtonComponent from "./search/PostButtonComponent";
import ClearButtonComponent from "./search/ClearButtonComponent";

const Form: React.FC = () => {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleCheckChange = (label: string, checked: boolean) => {
    setCheckboxValues((prev) =>
      checked ? [...prev,label] :prev.filter((v) => v !== label)
    );
  };

  const handleRadioChange = (value: string) =>{
    setRadioValue(value);
  };
  
  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleClear = () => {
    setCheckboxValues([]);
    setRadioValue("");
    setTextValue("");
  };

  return (
    <div className="form-container">
      <h2>フォーム</h2>
      <div style={{ display:"flex" }}>
        <p style={{ padding:"2rem" }}>チェックボックス：</p>
        <CheckBoxComponent checkValues={checkboxValues} handleCheckChange={handleCheckChange}/>
      </div>
      <div style={{ display: "flex", paddingLeft:"2rem" }}>
        <p style={{ margin: "0.5rem 3rem 0 0" }}>ラジオボタン：</p>
        <RadioButtonComponent radioValue={radioValue} handleRadioChange={handleRadioChange}/>
      </div>
      <div style={{ display: "flex",paddingLeft:"2rem", marginTop: "2rem"}}>
        <p style={{ margin:"0.5rem 3rem 0 0" }}>テキストフィールド：</p>
        <TextFieldComponent textValue={textValue} handleTextChange={handleTextChange}/>
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"2rem" }}>
        <PostButtonComponent />
        <ClearButtonComponent onClick={handleClear}/>
      </div>
    </div>
  );
};

export default Form;
