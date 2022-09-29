import React, { useState } from 'react';
import styles from '../Authorization/auth.module.css'

const Auth = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className={styles.auth_wrapper}>
            <div className={auth_modal}>
                <h3>Войдите в систему, <br/> чтобы открыть все возможности</h3>
            </div>
            
        </div>
    );
};

export default Auth;