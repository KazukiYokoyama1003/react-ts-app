import CheckBox from "../../component/checkbox/CheckBox";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CheckBox color="blue" label="ボックス1"/>
      <CheckBox color="blue" label="ボックス2"/>
      <CheckBox color="blue" label="ボックス3"/>
    </div>
  );
}

export default App;
