import { useEffect, useState } from 'react';

import Hamburger from 'hamburger-react';
import NavLink from '../UI/navLink/NavLink';

import classes from './NavBar.module.css';

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY >= 200) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.querySelector('html').style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
		} else {
			document.querySelector('html').style.overflow = 'unset';
			document.querySelector('html').style.overflowX = 'hidden';

			document.body.style.overflow = 'unset';
		}
	});

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav
			className={`${classes['navigation']} ${isSticky && classes.sticky} ${
				isMenuOpen && classes['set-background']
			}`}
		>
			<a href="#about" className={classes.title}>
				<i className={`${classes.bolt} fa-solid fa-bolt`}></i>
				Dimitar
			</a>
			<ul
				className={`${classes.links}
         ${isMenuOpen ? classes.open : classes.close}`}
				onClick={closeMenu}
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
			</ul>
			<div className={classes['menu-btn']}>
				<Hamburger
					toggled={isMenuOpen}
					toggle={setIsMenuOpen}
				/>
			</div>
		</nav>
	);
};

export default NavBar;
