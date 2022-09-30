import React from 'react';
import styles from './card.module.css'

const Card = ({diner}) => {
    return (
        <div className={styles.main}>
            <div className={styles.card_image}>
                <img src={`http://localhost:4000/img/${diner.image}`} alt="" />
            </div>
            <h3>{diner.name}</h3>
            <hr />
            <span>{diner.raiting}★★★★★</span>
            <button>Подробнее</button>
        </div>
    );
};

export default Card;