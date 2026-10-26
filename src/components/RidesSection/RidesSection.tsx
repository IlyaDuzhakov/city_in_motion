import styles from "./RidesSection.module.css";
import Badge from "../Badge/Badge";
import sortAscendingIcon from "../../assets/icons/sort-ascending.png";
import RideCard from "./RideCard/RideCard";
import { useSelector } from "react-redux";
import AddRoute from "../AddRoute/AddRoute";

const RidesSection = () => {
  const routes = useSelector((state) => state);
  // console.log(routes)

  return (
    <section id="rides" className={styles.section}>
      {/* <div className="container"> */}
        <div className={styles.nearest_stars}>
          <div>
            <h2>Ближайшие заезды</h2>
            <p>
              Маршруты отсортированы по дате старта. Прошедшие остаются в афише.
            </p>
          </div>
          <Badge
            className={styles.badge}
            icon={<img src={sortAscendingIcon} alt="Проверка иконки" />}
          >
            По ближайшей дате · 4 маршрута
          </Badge>
        </div>
        <div className={styles.content}>
          <div className={styles.ridesList}>
            
            {//@ts-ignore
            routes.map((route) => {
              return <RideCard route={route}/>;
            })}
          </div>
          <AddRoute />
        </div>
      {/* </div> */}
    </section>
  );
};

export default RidesSection;
