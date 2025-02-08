import { FormGroup, Box, TextField as MuiTextField } from '@mui/material';

interface FieldProps {
    id: string;
    label: string;
    variant: 'outlined' | 'filled' | 'standard'; 
    size?: 'small' | 'medium';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

interface TextFieldProps {
options: FieldProps[];
}

export default function BasicTextFields({ options }: TextFieldProps) {
  return (
    <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      {options.map((option) => (
        <Box key={option.label} sx={{ flex: 1 }}>
              <MuiTextField
                  id={option.id || 'outlined-basic'}
                  size={option.size || 'medium'}
                  color={option.color || 'primary'}
                  label={option.label || 'Outlined'}
                  variant={option.variant || 'outlined'}
              />
        </Box> 
      ))}
    </FormGroup>
  );
}
