import React from 'react';
import Inline from './Inline';
import "./styleSheet.css"
import styles from "./styleSheet.module.css"

const StyleSheet = () => {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            <Inline/>
        </div>
    );
};

export default StyleSheet;