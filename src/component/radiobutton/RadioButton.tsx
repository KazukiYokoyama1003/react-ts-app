import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface RadioButtonProps {
    customSize?: "small" | "medium";
    color?: "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";
}

const RadioButton: React.FC<RadioButtonProps> = ({
    customSize = "medium", 
    color = "primary"
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio size={customSize === "small" ? "small" : "medium"} color={color}/>} label="Female" />
        <FormControlLabel value="male" control={<Radio size={customSize === "small" ? "small" : "medium"} color={color}/>} label="Male" />
        <FormControlLabel value="other" control={<Radio size={customSize === "small" ? "small" : "medium"} color={color}/>} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio size={customSize === "small" ? "small" : "medium"} color={color}/>} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
