import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';
import {Link, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={styles.navbar}>

        <a className={styles.title} href="/"><img src={getImageUrl("nav/Logotipo.png")} alt="logo" className={styles.img} /></a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen 
            ? getImageUrl("nav/closeIconBlack.png")
            : getImageUrl("nav/menuIconblack.png")
            }  
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li className={location.pathname === '/' ? styles.disabled : ''}><a href="/">Home</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li>{isHomePage 
                ? <a href="#projects">Serviços</a> 
                : <HashLink to="/#projects">Serviços</HashLink>}</li>
                <li><a href="#contact">Contactos</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar