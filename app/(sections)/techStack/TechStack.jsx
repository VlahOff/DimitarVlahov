import GlowingTitle from '@/components/glowingTitle/GlowingTitle';
import Skills from '@/components/skill/Skill';

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
				<Skills.HTML />
				<Skills.CSS />
				<Skills.ReactJS />
				<Skills.Redux />
				<Skills.NodeJS />
				<Skills.Express />
				<Skills.Git />
			</div>
		</section>
	);
};

export default TechStack;
