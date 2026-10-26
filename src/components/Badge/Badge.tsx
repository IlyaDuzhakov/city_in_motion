import type { ReactNode } from "react";
import styles from "./Badge.module.css";
import { LevelType } from "../../store/routeReducer";


const colors = {
  Легко: '#173C29',
  Средне: '#3A2D12',
  Сложно: '#3A171C'
}

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  level?: LevelType;
}

const Badge = ({ children, icon, className = "", level }: BadgeProps) => {
  return (
    //@ts-ignore
  <span style={{backgroundColor: colors[level]}} className={`${styles.badge} ${className}`}>
    {icon}
    {children}
  </span>
  )
};

export default Badge;
