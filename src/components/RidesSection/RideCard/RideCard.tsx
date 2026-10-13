import Badge from "../../Badge/Badge";
import styles from "./RideCard.module.css";
import { RouteType } from "../../../store/routeReducer";

interface RideCardProps {
  route: RouteType;
}

// interface RideCardProps описывает какие props и какого типа ожидает

const RideCard = ({route}:RideCardProps) => {
  const date = new Date(route.date)
  const month = new Intl.DateTimeFormat('ru-RU', {
    // new Intl.DateTimeFormat позволяет задать нужный формат дате и извлечь из нее только то что нам нужно
    month: 'short',
    
  }).format(date)
  const day = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
  }).format(date)
  console.log(month)
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

      <p className={styles.description}>
        Спокойный маршрут вдоль воды и парков. Утро без спешки.
      </p>

      <div className={styles.details}>
        <span>24 км</span>
        <Badge className={styles.difficulty}>ЛЕГКО</Badge>
      </div>

      <p className={styles.location}>Ростокинский акведук</p>

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