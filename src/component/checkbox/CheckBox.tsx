import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./CheckBox.module.css";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  customSize?: "small" | "large";
  color?: string;
  label?: string;
}

const CheckBox: FC<CheckBoxProps> = ({
  customSize = "large",
  color = "black",
  label = "",
  className,
  ...props
}) => {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className={classNames(styles[customSize], className)}
        style={{ accentColor: color }}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default CheckBox;