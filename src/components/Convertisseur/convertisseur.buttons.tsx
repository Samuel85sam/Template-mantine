// ConvertisseurButtons.tsx
import React from 'react';
import styles from './convertisseur.module.css';

const ConvertisseurButtons: React.FC = () => {
    const handleButtonClick = (currency: string) => {
        // Logique de conversion à implémenter
        console.log(`Conversion en ${currency}`);
    };

    return (
        <div className={styles.buttons}>
            <button className={styles.button} onClick={() => handleButtonClick('USD')}>Convert to USD</button>
            <button className={styles.button} onClick={() => handleButtonClick('EUR')}>Convert to EUR</button>
            <button className={styles.button} onClick={() => handleButtonClick('GBP')}>Convert to GBP</button>
        </div>
    );
};

export default ConvertisseurButtons;
