import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import GlowingTitle from '../../../components/glowingTitle/GlowingTitle';

import classes from './Hero.module.css';

const Hero = () => {
	return (
		<section
			className={classes['hero-wrapper']}
			id="about"
		>
			<GlowingTitle
				title="Hello, I am Dimitar"
				titleClasses={classes.title}
				className={classes['title-wrapper']}
			/>
			<div className={classes.description}>
				<p>
					Front-End Developer with a solid foundation in HTML, CSS, JavaScript
					and React.
				</p>
				<p>
					I am fueled by a profound passion for crafting visually captivating
					and user-friendly web experiences.
				</p>
				<p>
					I have developed various interactive web applications along my
					learning journey, demonstrating my ability to translate design
					concepts into responsive and functional interfaces.
				</p>
				<p>
					I am enthusiastic about applying my dedication and a keen eye for
					detail to create seamless user experiences.
				</p>
			</div>
			<ul className={classes['socials-wrapper']}>
				<li>
					<Link
						href="https://github.com/VlahOff"
						className={classes['social-link']}
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} />
					</Link>
				</li>
				<li>
					<Link
						href="https://www.linkedin.com/in/dimitar-vlahov-04b829227/"
						className={classes['social-link']}
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Hero;
