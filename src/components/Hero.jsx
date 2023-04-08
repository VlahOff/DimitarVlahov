import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero} id="about">
      <h2>Hello,</h2>
      <h2>I am <span className={classes.name}>Dimitar Vlahov</span>,</h2>
      <h2>Junior Front End Developer</h2>
    </section>
  );
};

export default Hero;