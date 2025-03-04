import React from "react";
import TableComponent, { Column } from "../component/table/Table";

const columns: Column[] = [
  { id: "name", label: "Dessert (100g serving)", align: "left" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
  { id: "carbs", label: "Carbs (g)", align: "right" },
  { id: "protein", label: "Protein (g)", align: "right" }
];

const rows = [
  { id: "1", name: "Frozen yoghurt", calories: 159, fat: 6, carbs: 24, protein: 4 },
  { id: "2", name: "Ice cream sandwich", calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { id: "3", name: "Eclair", calories: 262, fat: 16, carbs: 24, protein: 6 },
  { id: "4", name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: "5", name: "Gingerbread", calories: 356, fat: 16, carbs: 49, protein: 3.9 }
];

const App: React.FC = () => {
  return (
    <div>
      <TableComponent columns={columns} rows={rows} />

      <TableComponent columns={columns} rows={rows} showCheckbox={true} />
    </div>
  );
};

export default App;
