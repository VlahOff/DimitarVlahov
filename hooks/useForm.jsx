import { useEffect, useState } from 'react';

export const useForm = initialValues => {
	const [values, setValues] = useState(initialValues);
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			const isValidValues = Object.entries(values)
				.filter(v => v[0].includes('Valid'))
				.map(v => v[1])
				.every(v => v === true);

			setIsFormValid(isValidValues);
		}, 500);

		return () => clearTimeout(timer);
	}, [values]);

	const changeHandler = (event, validator) => {
		const id = event.target.id;
		const value = event.target.value;

		if (validator) {
			setValues(state => {
				return {
					...state,
					[id]: value,
					[id + 'Valid']: validator(value),
				};
			});
		} else {
			setValues(state => {
				return {
					...state,
					[id]: value,
				};
			});
		}
	};

	const radioChangeHandler = (event, id) => {
		console.log(event.target.value);
		setValues(state => {
			return {
				...state,
				[id]: event.target.value,
			};
		});
	};

	const doPasswordMatch = value => {
		return values?.password === value;
	};

	const resetValues = () => {
		setValues(initialValues);
	};

	return {
		formValues: values,
		isFormValid,
		changeHandler,
		radioChangeHandler,
		doPasswordMatch,
		resetValues,
		setValues,
	};
};
