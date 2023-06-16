import { useEffect } from 'react';
import classes from './MessageModal.module.css';

const MessageModal = props => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		setTimeout(() => {
			props.toggleModal();
		}, 2000);

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	return (
		<>
			<div className={classes.backdrop}></div>
			<div className={classes.modal}>
				<p className={classes.message}>{props.message}</p>
			</div>
		</>
	);
};

export default MessageModal;
