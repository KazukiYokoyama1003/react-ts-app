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
  values: { [key: string]: string };
  setValue: (id: string, value: string) => void;
}

export default function BasicTextFields({ options, values, setValue }: TextFieldProps) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.id, e.target.value);
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
            value={values[option.id] || ""}
            onChange={handleInput}
          />
        </Box>
      ))}
    </FormGroup>
  );
}
