import { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  color?: string;
}

const Button: FC<ButtonProps> = ({
  size = "medium",
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
      style={{ backgroundColor: color, color: "white" }} // インラインスタイルで色を適用
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;