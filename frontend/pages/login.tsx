import { NextPage } from 'next';
import React, { useState } from 'react';

const Login: NextPage = () => {
	const [result, setResult] = useState('nothing');
	const login = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		fetch('https://medusa.new.primalkitchen.nz.local/store/auth', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: event.target.email.value,
				password: event.target.password.value,
				// phoneNumber: number
			}),
		})
			.then(res => res.json())
			.then(res => {
				setResult(`id ${res.customer.id} logged in`);
			})
			.catch(res => setResult(`failed to login`));
	};

	const logout = () => {
		fetch('https://medusa.new.primalkitchen.nz.local/store/auth', {
			method: 'DELETE',
			credentials: 'include',
		})
			.then(res => res.json())
			.then(res => setResult(`logged out`))
			.catch(res => setResult(`failed to logout`));
	};

	const checkLogin = () => {
		fetch('https://medusa.new.primalkitchen.nz.local/store/auth', {
			credentials: 'include',
		})
			.then(res => res.json())
			.then(res => setResult(`${res.customer.email} is currently logged in`))
			.catch(res => setResult(`no one's logged in`));
	}

	return (
		<>
			<form onSubmit={login}>
				<label htmlFor='email'>email address</label>
				<input id='email' type='email' autoComplete='email'/>

				<label htmlFor='password'>password</label>
				<input id='password' type='password' autoComplete='current-password'/>

				<button type='submit'>login</button>

				<label>{result}</label>
			</form>
			<button onClick={logout}>logout</button>
			<button onClick={checkLogin}>check</button>
		</>
	);
};

export default Login;
