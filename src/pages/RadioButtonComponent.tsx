import React from "react";
import RadioButton from "../component/radiobutton/RadioButton";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <RadioButton
        options={[
          { value: "female", label: "Female", size: "small", color: "success" }, // 小さい緑
          { value: "male", label: "Male", size: "medium", color: "error" }, // 通常サイズ赤
          { value: "other", label: "Other", size: "small", color: "info" }, // 小さい水色
          { value: "disabled", label: "(Disabled option)", size: "medium", color: "warning", disabled: true}, // 通常サイズオレンジ
        ]}
      />
    </div>
  );
};

export default App;
