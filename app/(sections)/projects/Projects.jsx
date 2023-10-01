import GlowingTitle from '../../../components/glowingTitle/GlowingTitle';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

import classes from './Projects.module.css';

const Projects = () => {
	return (
		<section
			className={classes['projects-section']}
			id="projects"
		>
			<GlowingTitle
				title="Projects"
				titleClasses={classes.title}
			/>
			<div className={classes.projects}>
				{projects.map((p, i) => {
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
							designLink={p.designLink}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
