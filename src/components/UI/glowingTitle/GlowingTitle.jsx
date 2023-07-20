import classes from './GlowingTitle.module.css';

const GlowingTitle = ({ title, className, titleClasses }) => {
	return (
		<div className={`${classes.wrapper} ${className}`}>
			<h2 className={`${classes.title} ${titleClasses}`}>{title}</h2>
			<div className={classes.background}></div>
		</div>
	);
};

export default GlowingTitle;
