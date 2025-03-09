import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
  { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
];

interface TextFieldComponentProps {
  textValue: string;
  setTextValue: (value: string) => void;
}

const TextFieldComponent = ({ textValue, setTextValue }: TextFieldComponentProps) => {
  return (
    <div style={{ padding: "20px" }}>
      <TextField options={options} textValue={textValue} setTextValue={setTextValue} />
    </div>
  );
};

export default TextFieldComponent;
