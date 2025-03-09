import CheckBox from "../../component/checkbox/CheckBox";

interface CheckBoxComponentProps {
  checkValues: string[];
  setCheckValues: React.Dispatch<React.SetStateAction<string[]>>;
  handleCheckChange: (label: string, checked: boolean) => void;
}

const CheckBoxComponent = ({ checkValues, setCheckValues, handleCheckChange }: CheckBoxComponentProps) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CheckBox color="blue" label="ボックス1" values={checkValues} setValues={setCheckValues} onChange={handleCheckChange}/>
      <CheckBox color="blue" label="ボックス2" values={checkValues} setValues={setCheckValues} onChange={handleCheckChange}/>
      <CheckBox color="blue" label="ボックス3" values={checkValues} setValues={setCheckValues} onChange={handleCheckChange}/>
    </div>
  );
};

export default CheckBoxComponent;
