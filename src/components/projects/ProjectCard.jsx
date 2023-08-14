import ExternalLink from '../UI/externalLink/ExternalLink';

import classes from './ProjectCard.module.css';

const ProjectCard = ({
	title,
	description,
	techStackFront,
	techStackBack,
	designLink,
	liveLink,
	repoLink,
	image,
}) => {
	return (
		<article className={classes.card}>
			<div className={classes['left-part']}>
				<div className={classes['title-wrapper']}>
					<h2 className={classes.title}>{title}</h2>
				</div>
				<p className={classes.description}>{description}</p>
				<div className={classes['tech-stack']}>
					{techStackFront && (
						<>
							<h5 className={classes['stack-title']}>Front-end</h5>
							<div className={classes.stack}>
								{techStackFront.map(e => (
									<p
										key={e}
										className={classes.tech}
									>
										{e}
									</p>
								))}
							</div>
						</>
					)}
					{techStackBack && (
						<>
							<h5 className={classes['stack-title']}>Back-end</h5>
							<div className={classes.stack}>
								{techStackBack.map(e => (
									<p
										key={e}
										className={classes.tech}
									>
										{e}
									</p>
								))}
							</div>
						</>
					)}
				</div>
				<div className={classes['link-wrapper']}>
					{designLink && (
						<ExternalLink href={designLink}>Design</ExternalLink>
					)}
					{liveLink && <ExternalLink href={liveLink}>Live</ExternalLink>}
					<ExternalLink href={repoLink}>Repo</ExternalLink>
				</div>
			</div>
			<div className={classes['right-part']}>
				<img
					src={image}
					alt={title}
					className={classes.img}
				/>
			</div>
		</article>
	);
};

export default ProjectCard;
