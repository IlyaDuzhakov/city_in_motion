
import Hero from "../Hero/Hero";
import RidesSection from "../RidesSection/RidesSection";
import styles from './Main.module.css'

const Main = () => {
  return (
    <main>
      <Hero />
      <div className={styles.container}>
        <RidesSection />
        
      </div>
    </main>
  );
};

export default Main;
