import CheckBox from "../component/checkbox/CheckBox";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <CheckBox customSize="small" color="red" label="小さい赤色のチェックボックス"/>
      <CheckBox color="blue" label="大きい青色のチェックボックス"/>
      <CheckBox color="green" label="大きい緑色のチェックボックス"/>
    </div>
  );
}

export default App;
