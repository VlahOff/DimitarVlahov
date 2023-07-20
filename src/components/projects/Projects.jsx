import GlowingTitle from '../UI/glowingTitle/GlowingTitle';
import ProjectCard from './ProjectCard';
import data from './projects.json';

import classes from './Projects.module.css';

const Projects = () => {
	return (
		<section
			className={classes['projects-section']}
			id="projects"
		>
			<GlowingTitle title="Projects" />
			<div className={classes.projects}>
				{data.projects.map((p, i) => {
					return (
						<ProjectCard
							key={i}
							title={p.title}
							description={p.description}
							image={p.image}
							techStackFront={p.techStackFront}
							techStackBack={p.techStackBack}
							repoLink={p.repoLink}
							liveLink={p.liveLink}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
