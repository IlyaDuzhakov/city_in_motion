import React from 'react'
import Button from '../Button/Button'
import styles from './AddRoute.module.css'

const AddRoute = () => {
  return (
    <form>
        <div>
            <Button />
            <h2>Добавить маршрут</h2>
            <span>Новая прогулка сохранится только в этом браузере</span>
        </div>
        <div>
            <p>Название маршрута
                <span>*</span>
            </p>
            <input className={styles.nameRoute} type="text" placeholder='Пример' />
            <p>Минимум 3 символа</p>
        </div>
        <div>
            <div>
                <p>Дата старта
                    <span>*</span>
                </p>
                <input className={styles.dateRoute} type="date" />
                <p>Формат: день месяц год</p>
            </div>
        </div>
    </form>
  )
}

export default AddRoute