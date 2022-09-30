import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiners } from '../../features/dinerSlice';
import Card from '../Card/Card';
import SaidBar from '../SaidBar/SaidBar';
import styles from './cards.module.css'

const Cards = () => {
    const diners = useSelector(state => state.diners.diners)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDiners())
    }, [dispatch])
    return (
        <div className={styles.cards_container}>
            <div className={styles.saidBar_container}>
                <SaidBar />
            </div>
            <div className={styles.card_container}>
                {diners.map((diner, index) => {
                    return <Card diner={diner} />
                })}
            </div>

        </div>
    );
};

export default Cards;