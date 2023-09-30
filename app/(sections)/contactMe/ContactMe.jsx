'use client';

import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

import MessageModal from '@/components/messageModal/MessageModal';
import GlowingTitle from '../../../components/glowingTitle/GlowingTitle';
import Input from '../../../components/inputs/Input';
import Textarea from '../../../components/inputs/Textarea';
import { useForm } from '../../../hooks/useForm';

import classes from './ContactMe.module.css';

const emailReg =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValidation = value => {
	return emailReg.test(value.trim());
};

const nameValidation = value => {
	return value.trim().length >= 3;
};

const messageValidation = value => {
	return value.trim().length >= 10;
};

const ContactMe = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const formRef = useRef(null);
	const { formValues, isFormValid, changeHandler, resetValues } = useForm({
		name: '',
		nameValid: null,
		email: '',
		emailValid: null,
		message: '',
		messageValid: null,
	});

	const toggleModal = message => {
		setModalMessage(message);
		setIsModalOpen(s => !s);
	};

	const onSubmitHandler = event => {
		event.preventDefault();

		if (isFormValid) {
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
					process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
					formRef.current,
					process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
				)
				.then(result => {
					if (result.status === 200) {
						toggleModal('Thank you for reaching out.');
						resetValues();

						setTimeout(() => {
							toggleModal('');
						}, 2000);
					}
				})
				.catch(e => {
					toggleModal('An error has ocurred please try later! ');
				});
		}
	};

	return (
		<>
			{isModalOpen && (
				<MessageModal
					message={modalMessage}
					toggleModal={toggleModal}
				/>
			)}
			<section
				className={classes['contact-me-wrapper']}
				id="contactMe"
			>
				<GlowingTitle
					title="Contact Me"
					titleClasses={classes['title-header']}
				/>
				<form
					className={classes.form}
					onSubmit={onSubmitHandler}
					ref={formRef}
				>
					<Input
						id="name"
						label="Name"
						onChange={e => changeHandler(e, nameValidation)}
						value={formValues.name}
						error={formValues.nameValid}
						errorMessage="Please enter your name."
					/>
					<Input
						id="email"
						label="Email"
						onChange={e => changeHandler(e, emailValidation)}
						value={formValues.email}
						error={formValues.emailValid}
						errorMessage="Invalid email."
					/>
					<Textarea
						id="message"
						label="Message"
						onChange={e => changeHandler(e, messageValidation)}
						value={formValues.message}
						error={formValues.messageValid}
						errorMessage="Message must me at least 10 chars long."
					/>
					<button
						className={classes['submit-btn']}
						disabled={!isFormValid}
					>
						Submit
					</button>
				</form>
			</section>
		</>
	);
};

export default ContactMe;
