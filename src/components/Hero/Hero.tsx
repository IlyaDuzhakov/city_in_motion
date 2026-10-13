import styles from "./Hero.module.css";
import HeroActions from "./HeroActions";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__inner}>
          <div className={styles.hero__content}>
            <div className={styles.hero__label}>
              <span>АФИША</span>
              <span>МОСКВА</span>
              <span>ВЫХОДНЫЕ</span>
            </div>

            <h1 className={styles.hero__title}>
              Город ближе, когда едешь вместе
            </h1>
            <p className={styles.hero__description}>
              Открытые велопрогулки по выходным. Выберите маршрут по дате,
              дистанции и темпу — регистрация не нужна.
            </p>
          <HeroActions />
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
