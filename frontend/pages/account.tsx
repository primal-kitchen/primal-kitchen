import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

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
		})
	};

	// const addresses = useEffect(() => user.customer.shipping_addresses, [user]);

	return (
		<div>
			<form onSubmit={() => console.log('update time')}>
				<label htmlFor='first-name'>first name {user?.first_name}</label>
				<input id='first-name' type='text' autoComplete='given-name'/>
				<br/>

				<label htmlFor='last-name'>last name {user?.first_name}</label>
				<input id='last-name' type='last' autoComplete='family-name'/>
				<br/>

				<label htmlFor='email'>email address {user?.email}</label>
				<input id='email' type='email' autoComplete='email'/>
				<br/>

				<label htmlFor='phone-number'>phone {user?.phone}</label>
				<input id='phone-number'/>
				<br/>

				<button type='submit'>update</button>
			</form>
			<br/>

			<h1>add address</h1>
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
