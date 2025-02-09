import TextField from "../component/textfield/TextField";

const options = [
    { id: '', label: '', size: '', color: '', variant: '' },
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
