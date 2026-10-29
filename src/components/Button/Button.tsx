import styles from "./Button.module.css";
import plus from "../../assets/icons/plus.png";

interface ButtonProps {
  children?: string;
  img?: string;
}
const Button = ({ children, img = plus }: ButtonProps) => {
  return (
    <button className={styles.btn_add_route}>
      <img src={img} alt="text" />
      {children}
    </button>
  );
};

export default Button;
