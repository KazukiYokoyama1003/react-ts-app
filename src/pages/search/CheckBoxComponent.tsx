import CheckBox from "../../component/checkbox/CheckBox";

interface CheckBoxComponentProps {
  checkValues: string[];
  setCheckValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBoxComponent = ({ checkValues, setCheckValues }: CheckBoxComponentProps) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CheckBox color="blue" label="ボックス1" values={checkValues} setValues={setCheckValues} />
      <CheckBox color="blue" label="ボックス2" values={checkValues} setValues={setCheckValues} />
      <CheckBox color="blue" label="ボックス3" values={checkValues} setValues={setCheckValues} />
    </div>
  );
};

export default CheckBoxComponent;
