import { useEffect, useRef, useState } from 'react';
import emailjs from '../../node_modules/emailjs-com';

import classes from './ContactMe.module.css';

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const initialFormValues = {
  name: '',
  nameValid: null,
  email: '',
  emailValid: null,
  message: '',
  messageValid: null
};

const ContactMe = (props) => {
  const formRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [values, setValues] = useState(initialFormValues);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isValidValues = Object.entries(values)
        .filter(v => v[0].includes('Valid'))
        .map(v => v[1])
        .every(v => v === true);

      setIsFormValid(isValidValues);
    }, 100);

    return () => clearTimeout(timer);
  }, [values]);

  const onChangeHandler = (event) => {
    setValues(state => {
      return {
        ...state,
        [event.target.id]: event.target.value
      };
    });
  };

  const onNameBlurHandler = (event) => {
    setValues(state => {
      return {
        ...state,
        [event.target.id + 'Valid']: event.target.value.trim().length > 0
      };
    });
  };

  const onEmailBlurHandler = (event) => {
    setValues(state => {
      return {
        ...state,
        [event.target.id + 'Valid']: emailReg.test(event.target.value.trim())
      };
    });
  };

  const onMessageBlurHandler = (event) => {
    setValues(state => {
      return {
        ...state,
        [event.target.id + 'Valid']: event.target.value.trim().length > 0
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        if (result.status === 200) {
          props.toggleModal('Message sent successfully!');
          setValues(initialFormValues);
        }
      })
      .catch(() => {
        props.toggleModal('An error has ocurred!');
      });
  };

  return (
    <section className={classes['contact-me-wrapper']} id="contactMe">
      <h2 className={classes.title}>Contact <span className={classes.color}>Me</span></h2>

      <form
        className={classes.form}
        onSubmit={onSubmitHandler}
        ref={formRef}
      >
        <div className={classes['input-wrapper']}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="off"
            className={classes.input}
            onChange={onChangeHandler}
            onBlur={onNameBlurHandler}
            value={values.name}
          />
          <label htmlFor="name" className={classes.label}>Name</label>
          {values.nameValid === false &&
            <p className={classes['error-message']}>Field must not be empty.</p>
          }
        </div>
        <div className={classes['input-wrapper']}>
          <input
            type="email"
            name='email'
            id="email"
            placeholder="Email"
            autoComplete="off"
            className={classes.input}
            onChange={onChangeHandler}
            onBlur={onEmailBlurHandler}
            value={values.email}
          />
          <label htmlFor="email" className={classes.label}>Email</label>
          {values.emailValid === false &&
            <p className={classes['error-message']}>Invalid email.</p>
          }
        </div>
        <div className={classes['input-wrapper']}>
          <textarea
            name="message"
            id="message"
            cols="30" rows="10"
            placeholder="Message"
            className={classes.input}
            onChange={onChangeHandler}
            onBlur={onMessageBlurHandler}
            value={values.message}
          ></textarea>
          <label htmlFor="message" className={classes.label}>Message</label>
          {values.messageValid === false &&
            <p className={classes['error-message']}>Field must not be empty.</p>
          }
        </div>
        <button
          className={classes['submit-btn']}
          disabled={!isFormValid}
        >Submit</button>
      </form>
    </section>
  );
};

export default ContactMe;