import Badge from "../../Badge/Badge";
import styles from "./RideCard.module.css";
import { RouteType } from "../../../store/routeReducer";
import easyLevel from "../../../assets/icons/leaf.png";
import middleLevel from "../../../assets/icons/gauge-speed.png";
import hardLevel from "../../../assets/icons/mountain.png";

interface RideCardProps {
  route: RouteType;
}

// interface RideCardProps описывает какие props и какого типа ожидает

const RideCard = ({ route }: RideCardProps) => {
  let level;

  const date = new Date(route.date);
  const month = new Intl.DateTimeFormat("ru-RU", {
    // new Intl.DateTimeFormat позволяет задать нужный формат дате и извлечь из нее только то что нам нужно
    month: "short",
  }).format(date);
  const day = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
  }).format(date);
  console.log(month);

  let levelIcon;
  if (route.level === "Легко") {
    levelIcon = easyLevel;
    level = "easy";
  } else if (route.level === "Средне") {
    levelIcon = middleLevel;
    level = "middle";
  } else {
    levelIcon = hardLevel;
    level = "hard";
  }
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.date}>
          <strong>{day}</strong>
          <span>{month}</span>
        </div>

        <Badge className={styles.status}>БЛИЖАЙШИЙ</Badge>
      </div>

      <h3 className={styles.title}>{route.name}</h3>

      <p className={styles.description}>{route.description}</p>

      <div className={styles.details}>
        <span>{route.distance} км</span>
        <Badge
          className={[styles.difficulty, level].join(" ")}
          icon={<img src={levelIcon} alt="levelIcon" />}
          level={route.level}
        >
          {route.level.toUpperCase()}
        </Badge>
        {/* /toLocaleUpperCase позволяет добавить язык и страну/ */}
      </div>

      <p className={styles.location}>{route.start}</p>

      <div className={styles.actions}>
        <button type="button" className={styles.edit}>
          Редактировать
        </button>

        <button type="button" className={styles.delete}>
          Удалить
        </button>
      </div>
    </article>
  );
};

export default RideCard;
