import type { NextPage } from 'next';
import React, { useState } from 'react';

const Signup: NextPage = ({}) => {
	const [result, setResult] = useState('nuffin');

	const signup = async (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		// check user hasn't already been created
		// await fetch('')
		// create the user
		fetch('https://medusa.new.primalkitchen.nz.local/store/customers', {
			method: 'POST',
			// credentials: 'same-origin',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: event.target.email.value,
				password: event.target.password.value,
				first_name: event.target['first-name'].value,
				last_name: event.target['last-name'].value,
				// phoneNumber: number
			})
		})
			.then(res => res.json())
			.then(console.info)
			.then(res => {
				setResult(`created :D ${res.customer.email}`)
			})
			// .catch(res => setResult(`failed! ${res.code} ${res.type} ${res.message}`))
			// .then(setResult)
	};

	return (
		<div>
			<h1>signup</h1>
			<form onSubmit={signup}>
				<label htmlFor='email'>email address</label>
				<input id='email' type='email' autoComplete='email'/>

				<label htmlFor='password'>password</label>
				<input id='password' type='password' autoComplete='new-password'/>

				<label htmlFor='first-name'>first</label>
				<input id='first-name' type='text' autoComplete='given-name'/>

				<label htmlFor='last-name'>last</label>
				<input id='last-name' type='last' autoComplete='family-name'/>

				<button type='submit'>sendit</button>
			</form>
			<p>{result}</p>
		</div>
	);
};

export default Signup;
