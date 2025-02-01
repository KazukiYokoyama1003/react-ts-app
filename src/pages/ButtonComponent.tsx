import Button from "../component/button/Button";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <Button size="small" color="red">Small Red</Button>
      <Button color="blue">Medium Blue</Button>
      <Button color="green">Large Green</Button>
    </div>
  );
}

export default App;
