import TextField, {FieldProps} from "../../component/textfield/TextField";

const options: FieldProps[] = [
    { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' }
  ];
  
  export default function App() {
    return (
      <div>
        <TextField options={options} />
      </div>
    );
  }
