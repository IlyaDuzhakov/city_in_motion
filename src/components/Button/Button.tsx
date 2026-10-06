import styles from './Button.module.css'

interface ButtonProps {
    children: string;
}
const Button = ({children}:ButtonProps) => {
    
  return (
    <button className={styles.btn_add_route}>+ {children}</button>
  )
}

export default Button