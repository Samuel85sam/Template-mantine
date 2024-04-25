// ConvertisseurForm.tsx
import React, { useState } from 'react';
import styles from './convertisseur.module.css';

const ConvertisseurForm: React.FC = () => {
    const [amount, setAmount] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logique de soumission du formulaire à implémenter
        console.log('Form submitted with amount:', amount);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={handleInputChange}
                placeholder="Enter amount to convert"
                className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>Convert</button>
        </form>
    );
};

export default ConvertisseurForm;
