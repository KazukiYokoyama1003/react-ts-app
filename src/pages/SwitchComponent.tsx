import Switch from "../component/switch/Switch";

const options = [
    { label: 'Label', size: 'small', color: 'primary', checked: true, disabled: false, required:false },
    { label: 'Required', size: 'medium', color: 'secondary', checked: false, disabled: false, required:true },
    { label: 'Disabled', size: 'small', color: 'success', checked: false, disabled: true, required:false },
  ];
  
  export default function App() {
    return (
      <div>
        <Switch options={options} />
      </div>
    );
  }