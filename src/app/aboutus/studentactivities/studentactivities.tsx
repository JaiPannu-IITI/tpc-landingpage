
import React from 'react';
import styles from './studentactivities.module.css';
import data from './data.json';

export default function Activities() {
    return (
        <>
            <div className={styles.cardContainer}>
                {data.activities.map((activity, index) => (
                    <div key={index} className={styles.card}>
                        <img src={activity.img} alt={activity.title} className={styles.image} />
                        <h3 className={styles.title}>{activity.title}</h3>
                        <p className={styles.description}>{activity.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
