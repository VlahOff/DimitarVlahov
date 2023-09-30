import Link from 'next/link';
import classes from './ExternalLink.module.css';

const ExternalLink = ({ children, href }) => {
	return (
		<Link
			href={href}
			target="_blank"
			className={classes.link}
		>
			{children}
		</Link>
	);
};

export default ExternalLink;
