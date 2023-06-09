import Skills from '../shared/skills/Skills';

import classes from './TechStack.module.css';

const TechStack = () => {
  return (
    <section className={classes['tech-stack']} id="techStack">
      <h2 className={classes.title}>
        <span className={classes.highlight}>Skills</span> and tools
      </h2>
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
