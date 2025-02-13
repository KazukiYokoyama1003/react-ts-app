export interface Column {
    id: string;
    label: string;
    align?: "left" | "center" | "right";
  }
  
export interface Row {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }
  
export interface TableComponentProps {
    columns: Column[];
    rows: Row[];
    showCheckbox?: boolean; // チェックボックスの表示/非表示
  }