import React, {useState} from 'react';

import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';
export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
       <nav className={styles.navbar}> 
        <a className={styles.title}href="/">InnoSyntax</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }   alt='menu-button' onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
                
                <li>
                    <a href='#about'>About Us</a>
                </li>
                <li>
                    <a href='#roadmap'>RoadMap</a>
                </li>
                <li>
                    <a href='#Technologies'>Technologies</a>
                </li>
                <li>
                    <a href='#contactus'>Contact Us</a>
                </li>
            </ul>
        </div>
       </nav>
       
        
    );
}

export default Navbar;
