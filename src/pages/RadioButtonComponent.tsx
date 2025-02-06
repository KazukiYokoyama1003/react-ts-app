import React from "react";
import RadioButton from "../component/radiobutton/RadioButton";

const App: React.FC = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>性別を選択してください</h2>
            <RadioButton customSize="medium" color="primary"/>
            <RadioButton customSize="small" color="error"/>
        </div>
        );
    };

export default App;
