import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { useForm } from '../../hooks/useForm';
import Input from '../UI/inputs/Input';
import Textarea from '../UI/inputs/Textarea';

import classes from './ContactMe.module.css';

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactMe = (props) => {
  const formRef = useRef();

  const { formValues, isFormValid, changeHandler, blurHandler, resetValues } =
    useForm({
      name: '',
      nameValid: null,
      email: '',
      emailValid: null,
      message: '',
      messageValid: null,
    });

  const onNameBlurHandler = (event) => {
    blurHandler(event, (v) => v.trim().length > 0);
  };

  const onEmailBlurHandler = (event) => {
    blurHandler(event, (v) => emailReg.test(v.trim()));
  };

  const onMessageBlurHandler = (event) => {
    blurHandler(event, (v) => v.trim().length > 10);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
          if (result.status === 200) {
            props.toggleModal('Thanks for reaching out.');
            resetValues();
          }
        })
        .catch(() => {
          props.toggleModal('An error has ocurred!');
        });
    }
  };

  return (
    <section className={classes['contact-me-wrapper']} id="contactMe">
      <h2 className={classes.title}>
        Contact <span className={classes.highlight}>Me</span>
      </h2>

      <form className={classes.form} onSubmit={onSubmitHandler} ref={formRef}>
        <Input
          id="name"
          label="Name"
          onChange={changeHandler}
          onBlur={onNameBlurHandler}
          value={formValues.name}
          error={formValues.nameValid}
          errorMessage="Please enter your name."
        />
        <Input
          id="email"
          label="Email"
          onChange={changeHandler}
          onBlur={onEmailBlurHandler}
          value={formValues.email}
          error={formValues.emailValid}
          errorMessage="Invalid email."
        />
        <Textarea
          id="message"
          label="Message"
          onChange={changeHandler}
          onBlur={onMessageBlurHandler}
          value={formValues.message}
          error={formValues.messageValid}
          errorMessage="Message must me at least 10 chars long."
        />
        <button className={classes['submit-btn']} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
