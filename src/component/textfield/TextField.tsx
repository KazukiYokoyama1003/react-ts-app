import { FormGroup, Box, TextField as MuiTextField } from '@mui/material';

export interface FieldProps {
  id: string;
  label: string;
    variant: 'outlined' | 'filled' | 'standard'; 
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

interface TextFieldProps {
  options: FieldProps[];
  textValue: string;
  setTextValue: (value: string) => void;
  handleTextChange: (value: string) => void;
}

export default function BasicTextFields({ options, textValue, setTextValue, handleTextChange }: TextFieldProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    handleTextChange(e.target.value);
  };

  return (
    <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      {options.map((option) => (
        <Box key={option.label} sx={{ flex: 1 }}>
          <MuiTextField
            id={option.id}
            size={option.size || 'medium'}
            color={option.color || 'primary'}
            label={option.label}
            variant={option.variant || 'outlined'}
            value={textValue}
            onChange={handleInput}
          />
        </Box>
      ))}
    </FormGroup>
  );
}
