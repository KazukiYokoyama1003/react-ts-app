import React from "react";
import Accordion from "../component/accordion/accordion";

const App: React.FC = () => {
  return (
    <div>
      <Accordion index={0} title="Accordion 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget." />
      <Accordion index={1} title="Accordion 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." />
    </div>
  );
};

export default App;