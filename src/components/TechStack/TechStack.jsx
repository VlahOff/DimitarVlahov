import classes from './TechStack.module.css';

const TechStack = () => {
  return (
    <section className={classes['tech-stack']} id="techStack">
      <h2 className={classes.title}>
        <span className={classes.highlight}>Skills</span> and tools
      </h2>
      <div className={classes['tech-wrapper']}>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
          <h4>JavaScript</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" />
          <h4>TypeScript</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
          <h4>HTML</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
          <h4>CSS</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=angular" alt="Angular" />
          <h4>Angular</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=react" alt="ReactJS" />
          <h4>ReactJS</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJS" />
          <h4>NodeJS</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=express" alt="Express" />
          <h4>Express</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDb" />
          <h4>MongoDb</h4>
        </article>
        <article className={classes.skill}>
          <img src="https://skillicons.dev/icons?i=git" alt="Git" />
          <h4>Git</h4>
        </article>
      </div>
    </section>
  );
};

export default TechStack;