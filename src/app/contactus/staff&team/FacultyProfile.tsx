import React from 'react';
import styles from './FacultyProfile.module.css';
import facultyInfo from './facultyInfo.json';

export default function FacultyProfile(props:any){
    return (
        <div className={styles.cardContainer}>
            {Object.entries(props).map(([key, value]) => (
                <div  key={key} className={styles.card}>
                    <div className={styles.info}>
                        <h2>{key}</h2>
                        <p>{props[key]}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    );
};


