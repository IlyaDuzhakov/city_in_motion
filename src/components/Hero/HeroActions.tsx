import Button from "../Button/Button";
import styles from "./HeroActions.module.css";

const HeroActions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <Button>Добавить маршрут</Button>
        <a href="#rides">Смотреть заезды</a>
      </div>

      <div className={styles.stats}>
        <div>
          <strong>3</strong>
          <span>ближайших</span>
        </div>

        <div>
          <strong>18–52</strong>
          <span>километра</span>
        </div>

        <div>
          <strong>local</strong>
          <span>в этом браузере</span>
        </div>
      </div>
    </div>
  );
};

export default HeroActions;