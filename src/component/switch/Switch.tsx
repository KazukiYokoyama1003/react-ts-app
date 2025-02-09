import { FormGroup, FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { useState } from 'react';

export interface SwitchProps {
  label: string;
  size?: 'small' | 'medium';
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}

interface SwitchLabelsProps {
  options: SwitchProps[];
}

export default function SwitchLabels({ options }: SwitchLabelsProps) {

  const [checkedValues, setCheckedValues] = useState<{ [key: string]: boolean }>(
    options.reduce((acc, option) => ({ ...acc, [option.label]: option.checked || false }), {})
  );

  // スイッチの状態を反転する処理
  const handleChange = (label: string) => {
    setCheckedValues((prev) => ({
      ...prev,
      [label]: !prev[label], 
    }));
  };

  return (
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          key={option.label}
          control={
            <MuiSwitch
              checked={checkedValues[option.label]}
              size={option.size || 'medium'}
              color={option.color || 'primary'}
              disabled={option.disabled || false}
              required={option.required || false}
              onChange={() => handleChange(option.label)}
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  );
}
