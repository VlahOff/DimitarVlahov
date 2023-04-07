import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navigation}>
          <li><a href="" className={classes['nav-link']}>About</a></li>
          <li><a href="" className={classes['nav-link']}>Tech stack</a></li>
          <li><a href="" className={classes['nav-link']}>Projects</a></li>
          <li><a href="" className={classes['nav-link']}>Contact me!</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;