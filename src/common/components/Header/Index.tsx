import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Index() {
    return (
        <div className={styles.header}>
            <Link to="/Cart">
                Cart
            </Link>
        </div>
    )
}

export default Index
