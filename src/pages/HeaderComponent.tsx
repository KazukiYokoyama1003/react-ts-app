import MenuComponent from "./MenuComponent";
import TooltipComponent from "./TooltipComponent";
import Button from "../component/button/Button";

const Header: React.FC = () => {
  return (
    <div className="header-container" style={{ display: "flex", gap: "50px", alignItems: "center", backgroundColor:"#fff", width:"100%" }}>
      <div style={{ display:"flex", gap:"5px" }}>
        <MenuComponent />
        <TooltipComponent />
        <TooltipComponent />
      </div>
      <div style={{ display: "flex", marginLeft: "auto" }}>
        <div style={{ padding:"0.5rem" }}>
          <Button size="small" color="blue">ログイン</Button>
        </div>      
      </div>
    </div>
  );
};

export default Header;