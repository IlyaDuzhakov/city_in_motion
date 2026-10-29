
import Button from "../Button/Button";
import styles from "./AddRoute.module.css";
import hashIcon from "../../assets/icons/hash.png";
import hardDrive from "../../assets/icons/hard-drive.png";
import ButtonLevel from "../Button/ButtonLevel";
import easyIcon from "../../assets/icons/leaf.png"
import middleIcon from "../../assets/icons/gauge-speed.png"
import hardIcon from "../../assets/icons/mountain.png"
import {LevelType} from "../Button/ButtonLevel"
import rotateIcon from "../../assets/icons/rotate.png"


const AddRoute = () => {
    type LevelsType = {
        img: string;
        text: LevelType
    }
    const levels:LevelsType[] = [
        {img: easyIcon, text: 'Легко'},
        {img: middleIcon, text: 'Средне'},
        {img: hardIcon, text: 'Сложно'}
    ]
  return (
    <form>
      <div>
        <Button />
        <h2>Добавить маршрут</h2>
        <span>Новая прогулка сохранится только в этом браузере</span>
      </div>
      <div>
        <p>
          Название маршрута
          <span>*</span>
        </p>
        <input className={styles.nameRoute} type="text" placeholder="Пример" />
        <p>Минимум 3 символа</p>
      </div>
      {/* <div> */}
        <div>
          <p>
            Дата старта
            <span>*</span>
          </p>
          <input className={styles.dateRoute} type="date" />
          <p>Формат: день месяц год</p>
        </div>
        <div>
          <p>
            Дистанция, км
            <span>*</span>
          </p>
          <input className={styles.dateNumber} type="number" placeholder="0"/>
          <p>Только положительное число</p>
        </div>
        <div>
          <p>Сложность</p>
          <div>
            {
                levels.map((level)=> {
                    return <ButtonLevel img={level.img} text={level.text} key={level.img}/>
                })
            }
            {/* <ButtonLevel img={easyIcon} text={'Легко'}/>
            <ButtonLevel img={middleIcon} text={'Средне'}/>
            <ButtonLevel img={hardIcon} text={'Сложно'}/> */}
            <p>Выберите темп и рельеф маршрута</p>
          </div>
        </div>
        <div>
          <p>Место старта</p>
          <input
            className={styles.venue}
            type="text"
            placeholder="Например, у входа в парк"
          />
          <p>Укажите понятный ориентир</p>
        </div>
        <div className={styles.description}>
          <label>Короткое описание</label>
          <p>0/240</p>
        </div>
        <div>
        <textarea className={styles.importantDetails} placeholder="Опишите темп, покрытие и важные детали маршрута" />
        <p>До 240 символов</p>
        </div>
      {/* </div> */}
      <Button img={rotateIcon}>Очистить</Button>
      <Button>Добавить</Button>
      <div>
        <img src={hardDrive} alt="hardDrive" />
        <p>Данные хранятся локально и восстановятся после перезагрузки.</p>
      </div>
    </form>
  );
};

export default AddRoute;
