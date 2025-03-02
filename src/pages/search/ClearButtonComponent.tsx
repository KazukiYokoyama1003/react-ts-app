import Button from "../../component/button/Button2";

const ClearButtonComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <div style={{ padding:"20px" }}>
      <Button label="条件クリア" color="blue" onClick={onClick}></Button>
    </div>
  );
}

export default ClearButtonComponent;