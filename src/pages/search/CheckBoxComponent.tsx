import CheckBox from "../../component/checkbox/CheckBox";

interface CheckBoxComponentProps {
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBoxComponent = ({ values, setValues }: CheckBoxComponentProps) => {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CheckBox color="blue" label="ボックス1" values={values} setValues={setValues} />
      <CheckBox color="blue" label="ボックス2" values={values} setValues={setValues} />
      <CheckBox color="blue" label="ボックス3" values={values} setValues={setValues} />
    </div>
  );
};

export default CheckBoxComponent;
