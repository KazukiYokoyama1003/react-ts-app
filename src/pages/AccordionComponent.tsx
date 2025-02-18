import React from "react";
import Accordion from "../component/accordion/Accordion";

const App: React.FC = () => {
  return (
    <div>
      <Accordion isArrow={true} title="Accordion 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget." />
      <Accordion isArrow={false} title="Accordion 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." />
    </div>
  );
};

export default App;