import styles from "./RidesSection.module.css";
import Badge from "../Badge/Badge";
import sortAscendingIcon from "../../assets/icons/sort-ascending.png";
import RideCard from "./RideCard/RideCard";
import { useSelector} from "react-redux";
import AddRoute from "../AddRoute/AddRoute";
import { useTypeDispatch } from "../../helpers/redaxHelpers";

const RidesSection = () => {
  const dispatch = useTypeDispatch();
  const routes = useSelector((state) => state);
  // console.log(routes)

  return (
    <section id="rides" className={styles.section}>
      {/* <div className="container"> */}
      <div className={styles.nearest_stars}>
        {/* <button
          onClick={() => {
            dispatch({type: 'ADD_ROUTE', payload: {
                name: "Moscow - Pekin",
                date: "1993-02-26",
                distance: 15,
                level: "Легко",
                start: "Ростокинский акведук",
                description:
                  "Спокойный маршрут вдоль воды и парков. Утро без спешки.",
                id: 3,
              },})
          }}
        >
          Add Route
        </button> */}
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
          {
            //@ts-ignore
            routes.map((route) => {
              return <RideCard route={route} />;
            })
          }
        </div>
        <AddRoute />
      </div>
      {/* </div> */}
    </section>
  );
};

export default RidesSection;
