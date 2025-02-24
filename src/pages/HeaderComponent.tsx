import MenuComponent from "./MenuComponent";
import TooltipComponent from "./TooltipComponent";
import ButtonComponent from "./header/ButtonComponent";

const Header: React.FC = () => {
  return (
    <div className="header-container" style={{ display: "flex", gap: "50px", alignItems: "center", backgroundColor:"#fff", width:"100%" }}>
      <div style={{ display:"flex", gap:"5px" }}>
        <MenuComponent />
        <TooltipComponent />
        <TooltipComponent />
      </div>
      <div style={{ display: "flex", marginLeft: "auto" }}>
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Header;