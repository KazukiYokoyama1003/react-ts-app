import RadioButton from "../../component/radiobutton/RadioButton2";

interface RadioButtonComponentProps {
  radioValue: string;
  handleRadioChange: (value: string) => void;
}

const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({ radioValue, handleRadioChange }) => {
  return (
    <div>
      <RadioButton
        options={[
          { value: "ボタン1", label: "ボタン1", size: "medium", color: "success" },
          { value: "ボタン2", label: "ボタン2", size: "medium", color: "success" },
          { value: "ボタン3", label: "ボタン3", size: "medium", color: "success" },
        ]}
        selectedValue={radioValue}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default RadioButtonComponent;
