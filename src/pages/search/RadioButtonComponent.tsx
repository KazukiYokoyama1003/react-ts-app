import RadioButton from "../../component/radiobutton/RadioButton2";

interface RadioButtonComponentProps {
  radioValue: string;
  setRadioValue: (value: string) => void;
  handleRadioChange: (label: string, checked: boolean) => void;
}

const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({ radioValue, setRadioValue, handleRadioChange }) => {
  return (
    <div>
      <RadioButton
        options={[
          { value: "ボタン1", label: "ボタン1", size: "medium", color: "success" },
          { value: "ボタン2", label: "ボタン2", size: "medium", color: "success" },
          { value: "ボタン3", label: "ボタン3", size: "medium", color: "success" },
        ]}
        selectedValue={radioValue}
        setSelectedValue={setRadioValue}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default RadioButtonComponent;
