import { useState } from 'react';
import classes from './Header.module.css';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(s => !s);
  };

  return (
    <header className={classes.header}>
      <nav className={classes['nav-wrapper']}>
        <h1 className={classes.title}><i className={`${classes.bolt} fa-solid fa-bolt`}></i> Dimitar</h1>
        <ul
          className={`${classes.navigation}
         ${isMenuOpen ? classes.open : classes.close}`}
          onClick={toggleMenu}
        >
          <li><a href="#about" className={classes['nav-link']}>About</a></li>
          <li><a href="#techStack" className={classes['nav-link']}>Tech stack</a></li>
          <li><a href="#projects" className={classes['nav-link']}>Projects</a></li>
          <li><a href="#contactMe" className={classes['nav-link']}>Contact me!</a></li>
        </ul>
        <div className={classes['menu-btn']} onClick={toggleMenu}>
          <Hamburger toggled={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;