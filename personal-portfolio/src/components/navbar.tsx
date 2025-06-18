import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}></div>
        <span>Andrew Fassler</span>
      </div>
      <div className={styles.rightButtons}>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </nav>
  )
}