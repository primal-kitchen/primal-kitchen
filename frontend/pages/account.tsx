// @ts-nocheck TODO: remove this

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { UpdateUserInput } from '@medusajs/medusa/dist/types/user';
import { useMeCustomer } from 'medusa-react';

const Account: NextPage = () => {
	const user = useMeCustomer();

	// TODO: medusa breaking unknown need wifi

	const addAddress = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		fetch(`https://medusa.new.primalkitchen.nz.local/store/customers/me/addresses`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				address: {
					company: event.target.company.value,
					first_name: event.target['first-name'].value,
					last_name: event.target['last-name'].value,
					address_1: event.target['address-1'].value,
					address_2: event.target['address-2'].value,
					postal_code: event.target['postal-code'].value,
					city: event.target.city.value,
					country_code: event.target.country.value,
				}
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
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(console.log)
			.catch(console.error);
	};
	const invalidSubmissionHandler: SubmitErrorHandler<UpdateUserInput> = badInput => console.log('failed to update...');

	return (
		<div>
			<form onSubmit={handleUpdateSubmission(validSubmissionHandler, invalidSubmissionHandler)}>
				<label htmlFor='first-name'>first name {user.customer?.first_name}</label>
				<input id='first-name' autoComplete='given-name' defaultValue={user.customer?.first_name} {...registerUpdateInput('first_name')}/>
				<br/>

				<label htmlFor='last-name'>last name {user.customer?.last_name}</label>
				<input id='last-name' type='last' autoComplete='famiy-name'
					   defaultValue={user.customer?.last_name} {...registerUpdateInput('last_name')}/>
				<br/>

				<label htmlFor='email'>email address {user.customer?.email}</label>
				<input id='email' type='email' autoComplete='email' defaultValue={user.customer?.email} {...registerUpdateInput('email')}/>
				<br/>

				{/* TODO: phone maybe not in this update? */}
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

				<label htmlFor='postal-code'>postal code</label>
				<input id='postal-code' type='text' autoComplete=''/>
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
				{user.customer?.shipping_addresses.map(address => (
					<div key={address.address_1}>
						{address.address_1}
					</div>
				))}
			</div>
		</div>
	);
};

export default Account;
