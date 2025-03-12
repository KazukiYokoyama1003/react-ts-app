import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
  { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
];

interface TextFieldComponentProps {
  textValue: string;
  handleTextChange: (value: string) => void;
}

const TextFieldComponent = ({ textValue, handleTextChange }: TextFieldComponentProps) => {
  return (
    <div style={{ padding: "20px" }}>
      <TextField options={options} textValue={textValue} handleTextChange={handleTextChange}/>
    </div>
  );
};

export default TextFieldComponent;
