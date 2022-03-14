import React from 'react';

const CartItemsHeading: React.FC<{}> = () => (
	<div className='hidden md:contents font-bold capitalize'>
		<h1 className='justify-self-start text-2xl'>summary</h1>
		<h1 className='justify-self-start'>size</h1>
		<h1 className='self-end'>quantity</h1>
		<h1 className='self-end'>total</h1>
		<h1 className='self-end'>remove</h1>
	</div>
);

export default CartItemsHeading;
