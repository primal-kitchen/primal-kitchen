import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
	const [asdfs, setAsdfs] = useState('nothing');
	useEffect(() => {
		fetch('https://strapi-admin.new.primalkitchen.nz.local/asdfs', {
			// credentials: 'same-origin',
		})
			.then(res => res.json())
			.then(res => res[0])
			.then(res => setAsdfs(`${res.id} ${res.asdf} ${res.rt}`))
			.catch(() => setAsdfs('error'));
	}, [setAsdfs]);

	const [medusaBS, setMedusaBS] = useState('nuk');
	useEffect(() => {
		fetch('https://medusa.new.primalkitchen.nz.local/store/products/prod_01FQD5F25J0MJTQ5GX8XJJFYSZ', {
			// credentials: 'same-origin',
		})
			.then(res => res.json())
			.then(res => setMedusaBS(`${res.product.id} ${res.product.title} ${res.product.description}`))
			.catch(() => setMedusaBS('fucked out'));
	}, [setMedusaBS]);

	return (
		<main>
			<div>
				<h1>from strapi</h1>
				<p>{asdfs}</p>
			</div>
			<div>
				<h1>from medusa</h1>
				<p>{medusaBS}</p>
			</div>
		</main>
	);
};

export default Home;
