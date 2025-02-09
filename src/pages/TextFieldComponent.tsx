import TextField, {FieldProps} from "../component/textfield/TextField";

const options: FieldProps[] = [
    { id: '', label: '', size: 'small', color: 'primary', variant: 'outlined' },
    { id: 'filled-basic', size: 'medium', color: 'secondary', label: 'Filled', variant: 'filled' },
    { id: 'Disabled', size: 'small', color: 'success', label: 'Standard', variant: 'standard' },
  ];
  
  export default function App() {
    return (
      <div>
        <TextField options={options} />
      </div>
    );
  }
