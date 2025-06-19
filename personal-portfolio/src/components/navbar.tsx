import React from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC<{}> = () => {
  return (
 <header>
      <nav className={styles.navbar}>
        <a href="#about" className={styles.link}>About Me</a>
        <a href="#work" className={styles.link}>Work Experience</a>
        <a href="#hobbies" className={styles.link}>Hobbies</a>
      </nav>
    </header>
  )
}

export default Navbar;