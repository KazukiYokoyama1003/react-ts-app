import { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: "small" | "large";
  color?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  label,
  size = "large",
  color = "blue",
  children,
  className,
  onClick,
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
      onClick={onClick}
      {...props}
    >
      {label || children}
    </button>
  );
};

export default Button;