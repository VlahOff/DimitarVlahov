import classes from './ExternalLink.module.css';

const ExternalLink = ({ children, href }) => {
	return (
		<a
			href={href}
			target="_blank"
			className={classes.link}
		>
			{children}
		</a>
	);
};

export default ExternalLink;
