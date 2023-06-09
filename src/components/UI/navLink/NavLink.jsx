import classes from './NavLink.module.css';

const NavLink = ({ href, children, target }) => {
  return (
    <a href={href} className={classes.link} target={target}>
      {children}
    </a>
  );
};

export default NavLink;
