import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Account: NextPage = () => {
	const [user, setUser] = useState('nuk');
	useEffect(() => {
		fetch('https://medusa.new.primalkitchen.nz.local/store/customers/me', {
			credentials: 'include',
		})
			.then(res => res.json())
			.then(res => setUser(res.customer))
			.catch(er => setUser(`errr...`));
	}, []);
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
			<form>

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
