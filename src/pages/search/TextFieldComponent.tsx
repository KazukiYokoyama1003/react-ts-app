import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
  { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
];

interface TextFieldComponentProps {
  textValue: string;
  setTextValue: (value: string) => void;
  handleTextChange: (value: string) => void;
}

const TextFieldComponent = ({ textValue, setTextValue, handleTextChange }: TextFieldComponentProps) => {
  return (
    <div style={{ padding: "20px" }}>
      <TextField options={options} textValue={textValue} setTextValue={setTextValue} handleTextChange={handleTextChange}/>
    </div>
  );
};

export default TextFieldComponent;
