import classes from './ContactMe.module.css';

const ContactMe = () => {
  return (
    <section className={classes['contact-me-wrapper']}>
      <h2 className={classes.title}>Contact <span className={classes.color}>Me</span></h2>
    </section>
  );
};

export default ContactMe;