import { NextPage } from 'next';
import BodyClamp from '../components/utilities/body-clamp';
import Button, { Colour, Proportion, Size } from '../components/button/button';
import React from 'react';

const Cart: NextPage = () => {

	return (
		<BodyClamp className='w-screen h-screen grid items-center'>
			<Button padding={Size.LARGE} width={Proportion.FIT} colour={Colour.RED}>TEST</Button>
		</BodyClamp>
	)
}

export default Cart;
