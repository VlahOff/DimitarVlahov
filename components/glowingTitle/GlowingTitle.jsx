import classes from './GlowingTitle.module.css';

const GlowingTitle = ({ title, className, titleClasses }) => {
	return (
		<header className={`${classes.wrapper} ${className}`}>
			<h2 className={`${classes.title} ${titleClasses}`}>{title}</h2>
			<div className={classes.background}></div>
		</header>
	);
};

export default GlowingTitle;
