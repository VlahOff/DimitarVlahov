import { useState } from 'react';

import Hamburger from 'hamburger-react';
import NavLink from '../UI/navLink/NavLink';

import classes from './Header.module.css';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(s => !s);
	};

	return (
		<header className={classes.header}>
			<nav className={classes['nav-wrapper']}>
				<h1 className={classes.title}>
					<i className={`${classes.bolt} fa-solid fa-bolt`}></i>
					Dimitar
				</h1>
				<ul
					className={`${classes.navigation}
         ${isMenuOpen ? classes.open : classes.close}`}
					onClick={toggleMenu}
				>
					<li>
						<NavLink href="#about">About</NavLink>
					</li>
					<li>
						<NavLink href="#techStack">Tech stack</NavLink>
					</li>
					<li>
						<NavLink href="#projects">Projects</NavLink>
					</li>
					<li>
						<NavLink href="#contactMe">Contact me!</NavLink>
					</li>
					<li>
						<NavLink
							href={import.meta.env.VITE_CV_LINK}
							target="_blank"
						>
							CV
							<i
								className={`${classes['arrow-down']} fa-solid fa-file-arrow-down`}
							></i>
						</NavLink>
					</li>
				</ul>
				<div
					className={classes['menu-btn']}
					onClick={toggleMenu}
				>
					<Hamburger toggled={isMenuOpen} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
