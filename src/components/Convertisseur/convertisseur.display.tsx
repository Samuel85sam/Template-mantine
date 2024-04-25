// ConvertisseurDisplay.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEuro, faPoundSign } from '@fortawesome/free-solid-svg-icons';
import styles from './convertisseur.module.css';

const ConvertisseurDisplay: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.currency}>
                <FontAwesomeIcon icon={faDollarSign} className={styles.icon} />
                <span>Dollar</span>
            </div>
            <div className={styles.currency}>
                <FontAwesomeIcon icon={faEuro} className={styles.icon} />
                <span>Euro</span>
            </div>
            <div className={styles.currency}>
                <FontAwesomeIcon icon={faPoundSign} className={styles.icon} />
                <span>Pound</span>
            </div>
        </div>
    );
};

export default ConvertisseurDisplay;
