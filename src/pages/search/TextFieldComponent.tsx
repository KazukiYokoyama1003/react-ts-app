import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
    { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
];

interface TextFieldComponentProps {
  values: { [key: string]: string };
  setValue: (values: (prev: { [key: string]: string }) => { [key: string]: string }) => void;
}

const TextFieldComponent = ({ values, setValue }: TextFieldComponentProps) => {
  const handleSetValue = (id: string, value: string) => {
    setValue((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <TextField options={options} values={values} setValue={handleSetValue} />
    </div>
  );
};

export default TextFieldComponent;
