import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const Badge = ({ children, icon, className = "" }: BadgeProps) => {
  return (
  <span className={`${styles.badge} ${className}`}>
    {icon}
    {children}
  </span>
  )
};

export default Badge;
