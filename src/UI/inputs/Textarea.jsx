import classes from './Input.module.css';

const Textarea = ({
	className,
	id,
	label,
	cols,
	rows,
	onChange,
	onBlur,
	value,
	error,
	errorMessage,
}) => {
	return (
		<div className={`${classes['input-wrapper']} ${className}`}>
			<textarea
				name={id}
				id={id}
				cols={cols || 30}
				rows={rows || 10}
				placeholder={label}
				className={classes.input}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<label
				htmlFor={id}
				className={classes.label}
			>
				{label}
			</label>
			{error === false && (
				<div className={classes['error-message']}>{errorMessage}</div>
			)}
		</div>
	);
};

export default Textarea;
