import React from "react";
import Card from "../component/card/Card";

const App: React.FC = () => {
  return (
    <div>
      <Card 
        title="Word of the Day"
        header="be•nev•o•lent"
        subtitle="adjective"
        explanation={`well meaning and kindly.\n"A benevolent smile"`}
        action="LEARN MORE"
      />
    </div>
  );
};

export default App;
