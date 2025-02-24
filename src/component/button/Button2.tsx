import { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button2.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: "small" | "large";
  color?: string;
}

const Button: FC<ButtonProps> = ({
  label,
  size = "large",
  color = "blue",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        className
      )}
      style={{ backgroundColor: color, color: "white" }}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;