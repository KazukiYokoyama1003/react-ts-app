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
  const [isCleared, setIsCleared] = useState(false);

  const handleClear = () => {
    setCheckboxValues([]);
    setRadioValue("");
    setTextValue("");
    setIsCleared(true);

    setTimeout(() => setIsCleared(false), 2000);
  };

  return (
    <div className="form-container">
      <h2>フォーム</h2>
      <div style={{ display:"flex" }}>
        <p style={{ padding:"2rem" }}>チェックボックス：</p>
        <CheckBoxComponent values={checkboxValues} setValues={setCheckboxValues} />
      </div>
      <div style={{ display: "flex", paddingLeft:"2rem" }}>
        <p style={{ margin: "0.5rem 3rem 0 0" }}>ラジオボタン：</p>
        <RadioButtonComponent values={radioValue} setValue={setRadioValue} />
      </div>
      <div style={{ display: "flex",paddingLeft:"2rem", marginTop: "2rem"}}>
        <p style={{ margin:"0.5rem 3rem 0 0" }}>テキストフィールド：</p>
        <TextFieldComponent values={textValue} setValue={setTextValue} />
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"2rem" }}>
        <PostButtonComponent />
        <ClearButtonComponent onClick={handleClear}/>
      </div>
      {isCleared && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
          <p>条件がクリアされました！</p>
        </div>
      )}
    </div>
  );
};

export default Form;
