import classes from './Skills.module.css';

const SkillTemplate = ({ name, img }) => {
	return (
		<article className={classes.container}>
			<div className={classes.skill}>
				<img
					src={img}
					alt={name}
				/>
				<h4>{name}</h4>
			</div>
		</article>
	);
};

const JavaScript = () => (
	<SkillTemplate
		name="JavaScript"
		img="https://skillicons.dev/icons?i=js"
	/>
);
const TypeScript = () => (
	<SkillTemplate
		name="TypeScript"
		img="https://skillicons.dev/icons?i=typescript"
	/>
);
const HTML = () => (
	<SkillTemplate
		name="HTML"
		img="https://skillicons.dev/icons?i=html"
	/>
);
const CSS = () => (
	<SkillTemplate
		name="CSS"
		img="https://skillicons.dev/icons?i=css"
	/>
);
const ReactJS = () => (
	<SkillTemplate
		name="ReactJS"
		img="https://skillicons.dev/icons?i=react"
	/>
);
const Redux = () => (
	<SkillTemplate
		name="Redux"
		img="https://skillicons.dev/icons?i=redux"
	/>
);
const Angular = () => (
	<SkillTemplate
		name="Angular"
		img="https://skillicons.dev/icons?i=angular"
	/>
);
const NodeJS = () => (
	<SkillTemplate
		name="NodeJS"
		img="https://skillicons.dev/icons?i=nodejs"
	/>
);
const Express = () => (
	<SkillTemplate
		name="Express"
		img="https://skillicons.dev/icons?i=express"
	/>
);
const MongoDB = () => (
	<SkillTemplate
		name="MongoDB"
		img="https://skillicons.dev/icons?i=mongodb"
	/>
);
const Git = () => (
	<SkillTemplate
		name="Git"
		img="https://skillicons.dev/icons?i=git"
	/>
);

export default Object.assign(SkillTemplate, {
	JavaScript,
	TypeScript,
	HTML,
	CSS,
	ReactJS,
	Redux,
	Angular,
	NodeJS,
	Express,
	MongoDB,
	Git,
});
