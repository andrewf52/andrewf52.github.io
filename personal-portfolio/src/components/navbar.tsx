import React from 'react';
import styles from './navbar.module.css';
import favicon from '../assets/favicon.png'

const Navbar: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img src={favicon} alt="circular logo with letters AF" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <a href="#about" className={styles.link}>About Me</a>
        <a href="#hobbies" className={styles.link}>Hobbies</a>        
        <a href="#work" className={styles.link}>Work Experience</a>
        <a href="#contact" className={styles.link}>Contact</a>

      </div>

    </nav>

  )
}

export default Navbar;