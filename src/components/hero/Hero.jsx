import classes from './Hero.module.css';

const Hero = () => {
	return (
		<section
			className={classes['hero-wrapper']}
			id="about"
		>
			<div className={classes.hero}>
				<h2>Hello,</h2>
				<h2>
					I am <span className={classes.name}>Dimitar Vlahov</span>,
				</h2>
				<h2>Junior Full-Stack Developer</h2>
			</div>
			<div className={classes.description}>
				<p>
					As a recent graduate with a passion for new technologies, I am a
					hardworking and ambitious individual who thrives in a collaborative
					team environment.
				</p>
				<p>
					My drive to learn and grow in my field fuels my dedication to staying
					up-to-date with the latest industry advancements.
				</p>
				<p>
					With my strong work ethic and team player mentality, I am confident in
					my ability to contribute to any project or organization.
				</p>
			</div>
			<ul className={classes['socials-wrapper']}>
				<li>
					<a
						href="https://github.com/VlahOff"
						className={classes['social-link']}
						target="_blank"
					>
						<i className="fa-brands fa-github"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/dimitar-vlahov-04b829227/"
						className={classes['social-link']}
						target="_blank"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Hero;
