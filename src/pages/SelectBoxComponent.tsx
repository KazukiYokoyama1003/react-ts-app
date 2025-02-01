import React from "react";
import SelectBox from "../component/selectbox/SelectBox";

const App: React.FC = () => {
    const selectBox = [
        { age: 10, label: "Ten" },
        { age: 20, label: "Twenty" },
        { age: 30, label: "Thirty" }
    ];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <SelectBox options={selectBox} />
        </div>
    );
};

export default App;
