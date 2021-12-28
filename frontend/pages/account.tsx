// @ts-nocheck TODO: remove this

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { UpdateUserInput } from '@medusajs/medusa/dist/types/user';

const Account: NextPage = () => {
	const [user, setUser] = useState({id: 'nuk'});
	useEffect(() => {
		fetch('https://medusa.new.primalkitchen.nz.local/store/customers/me', {
			credentials: 'include',
		})
			.then(res => res.json())
			.then(res => setUser(res.customer))
			.catch(er => setUser({id: `errr...`}));
	}, []);

	// TODO: medusa breaking unknown need wifi

	const addAddress = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		fetch(`https://medusa.new.primalkitchen.nz.local/store/customers/${user?.id}/addresses`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				company: event.target.company.value,
				first_name: event.target['first-name'].value,
				last_name: event.target['last-name'].value,
				address_1: event.target['address-1'].value,
				address_2: event.target['address-2'].value,
				city: event.target.city.value,
				country: event.target.country.value,
			}),
		});
	};

	// const addresses = useEffect(() => user.customer.shipping_addresses, [user]);

	// let's try and setup react-hook-form with medusa types :D
	const {handleSubmit: handleUpdateSubmission, register: registerUpdateInput} = useForm<UpdateUserInput>();
	const validSubmissionHandler: SubmitHandler<UpdateUserInput> = input => {
		console.log(`UPDATE? ${JSON.stringify(input)}`);
		const fixedInput = Object.fromEntries(
			Object.entries(input).filter(([name, value]) => value != '')
		);
		console.log(`FIXED? ${JSON.stringify(fixedInput)}`);
		fetch(`https://medusa.new.primalkitchen.nz.local/store/customers/me`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(fixedInput),
		})
			.then(res => res.json())
			.then(console.log)
			.catch(console.error);
	};
	const invalidSubmissionHandler: SubmitErrorHandler<UpdateUserInput> = badInput => console.log('failed to update...');

	return (
		<div>
			<form onSubmit={handleUpdateSubmission(validSubmissionHandler, invalidSubmissionHandler)}>
				<label htmlFor='first-name'>first name {user?.first_name}</label>
				<input id='first-name' autoComplete='given-name' defaultValue={user?.first_name} {...registerUpdateInput('first_name')}/>
				<br/>

				<label htmlFor='last-name'>last name {user?.last_name}</label>
				<input id='last-name' type='last' autoComplete='famiy-name'
					   defaultValue={user?.last_name} {...registerUpdateInput('last_name')}/>
				<br/>

				<label htmlFor='email'>email address {user?.email}</label>
				<input id='email' type='email' autoComplete='email' defaultValue={user?.email} {...registerUpdateInput('email')}/>
				<br/>

				{/* TODO: phone mayb not in this update? */}
				{/*<label htmlFor='phone-number'>phone {user?.phone} {...registerUpdateInput('')}</label>*/}
				{/*<input id='phone-number'/>*/}
				{/*<br/>*/}

				<button type='submit'>update</button>
			</form>
			<br/>

			<h1 className='text-red-900 text-3xl font-bold underline'>add address</h1>
			<form onSubmit={addAddress}>
				<label htmlFor='company'>company</label>
				<input id='company' type='text' autoComplete=''/>
				<br/>

				<label htmlFor='first-name'>first name</label>
				<input id='first-name' type='text' autoComplete='given-name'/>
				<br/>

				<label htmlFor='last-name'>last name</label>
				<input id='last-name' type='text' autoComplete='family-name'/>
				<br/>

				<label htmlFor='address-1'>address 1</label>
				<input id='address-1' type='text' autoComplete=''/>
				<br/>

				<label htmlFor='address-2'>address 2</label>
				<input id='address-2' type='text' autoComplete=''/>
				<br/>

				<label htmlFor='city'>city</label>
				<input id='city' type='text' autoComplete=''/>
				<br/>

				<label htmlFor='country'>country</label>
				<input id='country' type='text' autoComplete=''/>
				<br/>

				<button type='submit'>add address</button>
			</form>
			<br/>

			<h1>addresses...</h1>
			<div>
				{/*{addresses.forEach(address => (*/}
				{/*	<div>*/}
				{/*		${address}*/}
				{/*	</div>*/}
				{/*))}*/}
			</div>
		</div>
	);
};

export default Account;
