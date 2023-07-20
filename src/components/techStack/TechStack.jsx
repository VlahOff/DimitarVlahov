import GlowingTitle from '../UI/glowingTitle/GlowingTitle';
import Skills from './Skills';

import classes from './TechStack.module.css';

const TechStack = () => {
	return (
		<section
			className={classes['tech-stack']}
			id="techStack"
		>
			<GlowingTitle
				title="Skills and tools"
				titleClasses={classes.title}
			/>
			<div className={classes['skill-wrapper']}>
				<Skills.JavaScript />
				<Skills.TypeScript />
				<Skills.HTML />
				<Skills.CSS />
				<Skills.ReactJS />
				<Skills.Redux />
				<Skills.Angular />
				<Skills.NodeJS />
				<Skills.Express />
				<Skills.MongoDB />
				<Skills.Git />
			</div>
		</section>
	);
};

export default TechStack;
