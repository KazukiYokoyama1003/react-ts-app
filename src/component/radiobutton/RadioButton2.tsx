import { FC } from "react";

interface RadioButtonOption {
  value: string;
  label: string;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  onChange: (label: string, checked: boolean) => void;
}

const RadioButton: FC<RadioButtonProps> = ({ options, selectedValue, setSelectedValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="radio1"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
