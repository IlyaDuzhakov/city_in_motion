import styles from "./Header.module.css";
import bicycle from "../../assets/icons/bicycle.png";
import Button from "../Button/Button";
import {useTranslation} from "react-i18next"
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const Header = () => {
   const { t, i18n } = useTranslation();
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.brand}>
        <img src={bicycle} alt="bicycle" />

        <div className={styles.brandText}>
          <h1 className={styles.title}>ВелоДень</h1>
          <p>городские велопрогулки</p>
        </div>
      </div>
      <ChangeLanguage />
      <Button>{t('Добавить маршрут')}</Button>
    </header>
  );
};

export default Header;
