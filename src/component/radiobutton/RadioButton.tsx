import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface RadioOption {
  value: string;
  label: string;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
}

interface RadioButtonProps {
  options: RadioOption[];
}

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            disabled={option.disabled || false}
            control={
              <Radio
                size={option.size || "medium"}
                color={option.color || "primary"}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
