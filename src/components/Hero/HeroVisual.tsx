import styles from "./HeroVisual.module.css";
import heroImage from "../../assets/images/city.png";
import Badge from "../Badge/Badge";

const HeroVisual = () => {
  return (
    <div className={styles.visual}>
      <img
        className={styles.image}
        src={heroImage}
        alt="Велосипедный маршрут по городу"
      />
      <Badge className={styles.badge}>
        Следующий старт · 29 августа
      </Badge>
    </div>
  );
};

export default HeroVisual;
