import CheckBoxComponent from "./CheckBoxComponent";
import RadioButtonComponent from "./RadioButtonComponent";
import TextFieldComponent from "./TextFieldComponent";
import ButtonComponent from "./ButtonComponent";

const Form: React.FC = () => {
  return (
    <div className="form-container">
      <h2>フォーム</h2>
      <CheckBoxComponent />
      <RadioButtonComponent />
      <TextFieldComponent />
      <ButtonComponent />
    </div>
  );
};

export default Form;
