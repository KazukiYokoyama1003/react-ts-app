import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface SelectOption {
  age: number;
  label: string;
}

interface SelectBoxProps {
  options: SelectOption[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ options }) => { 
    const [value, setValue] = useState<number>(options[0].age);

    const handleChange = (event: SelectChangeEvent<string | number>) => {
        setValue(Number(event.target.value));
    };

    return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option.age} value={option.age}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    );
};

export default SelectBox;