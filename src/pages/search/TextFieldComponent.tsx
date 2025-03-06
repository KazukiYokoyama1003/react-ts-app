import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
    { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
];

interface TextFieldComponentProps {
  textValue: { [key: string]: string };
  setTextValue: (values: (prev: { [key: string]: string }) => { [key: string]: string }) => void;
}

const TextFieldComponent = ({ textValue, setTextValue }: TextFieldComponentProps) => {
  const handleSetValue = (id: string, value: string) => {
    setTextValue((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <TextField options={options} taxtValues={textValue} setTextValue={handleSetValue} />
    </div>
  );
};

export default TextFieldComponent;
