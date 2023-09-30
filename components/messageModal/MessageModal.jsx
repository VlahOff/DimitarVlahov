'use client';

import { useEffect } from 'react';
import classes from './MessageModal.module.css';

const MessageModal = ({ message }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	return (
		<>
			<div className={classes.backdrop}></div>
			<div className={classes.modal}>
				<p className={classes.message}>{message}</p>
			</div>
		</>
	);
};

export default MessageModal;
