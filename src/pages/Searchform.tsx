import CheckBoxComponent from "./search/CheckBoxComponent";
import RadioButtonComponent from "./search/RadioButtonComponent";
import TextFieldComponent from "./search/TextFieldComponent";
import PostButtonComponent from "./search/PostButtonComponent";
import ClearButtonComponent from "./search/ClearButtonComponent";

const Form: React.FC = () => {
  return (
    <div className="form-container">
      <h2>フォーム</h2>
      <div style={{ display:"flex" }}>
        <p style={{ padding:"2rem" }}>チェックボックス：</p><CheckBoxComponent />
      </div>
      <div style={{ display: "flex", paddingLeft:"2rem" }}>
        <p style={{ margin: "0.5rem 3rem 0 0" }}>ラジオボタン：</p>
        <RadioButtonComponent />
      </div>
      <div style={{ display: "flex",paddingLeft:"2rem", marginTop: "2rem"}}>
        <p style={{ margin:"0.5rem 3rem 0 0" }}>テキストフィールド：</p>
        <TextFieldComponent />
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginTop:"2rem" }}>
        <ClearButtonComponent />
        <PostButtonComponent />
      </div>
    </div>
  );
};

export default Form;
