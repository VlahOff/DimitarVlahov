import Link from 'next/link';
import classes from './NavLink.module.css';

const NavLink = ({ href, children, target }) => {
	return (
		<Link
			href={href}
			className={classes.link}
			target={target}
		>
			{children}
		</Link>
	);
};

export default NavLink;
