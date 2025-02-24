import React from "react";
import RadioButton from "../../component/radiobutton/RadioButton2";

const App: React.FC = () => {
  return (
    <div>
      <RadioButton
        options={[
          { value: "ボタン1", label: "ボタン1", size: "medium", color: "success" }, 
          { value: "ボタン2", label: "ボタン2", size: "medium", color: "success" },
          { value: "ボタン3", label: "ボタン3", size: "medium", color: "success" },
        ]}
      />
    </div>
  );
};

export default App;
