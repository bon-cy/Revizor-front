import React from 'react';
import styles from './saidBar.module.css'

const SaidBar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.filter_check}>
                <span>Кафе</span><input type="checkbox" name="" id="" /> 
            </div>
            <div className={styles.filter_check}>
                <span>Рестораны</span><input type="checkbox" name="" id="" /> 
            </div>            
            <div className={styles.filter_check}>
                <span>Фастфуд</span><input type="checkbox" name="" id="" /> 
            </div>
            <hr />
            <span>Цена:</span>
            от<input type="text" />
            до<input type="text" />
        </div>
    );
};

export default SaidBar;