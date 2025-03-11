import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import classNames from "classnames";
import styles from "./CheckBox.module.css";

interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  customSize?: "small" | "large";
  color?: string;
  label: string;
  values: string[];
  onChange: (label: string, checked: boolean) => void;
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBox: FC<CheckBoxProps> = ({
  customSize = "large",
  color = "black",
  label = "",
  values,
  onChange,
  setValues,
  className,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = label;
    if (event.target.checked) {
      setValues((prev) => [...prev, value]);
    } else {
      setValues((prev) => prev.filter((v) => v !== value));
    }
    onChange(label, event.target.checked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={classNames(styles[customSize], className)}
        checked = {values.includes(label)}
        onChange={handleChange}
        style={{ accentColor: color }}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default CheckBox;