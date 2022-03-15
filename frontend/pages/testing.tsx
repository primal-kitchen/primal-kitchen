import { NextPage } from 'next';
import CartItems from '../components/cart/cart-items';
import { Day } from '../components/product/product';
import { OrderProduct } from '../components/cart/cart-items-entry';
import BodyClamp from '../components/utilities/body-clamp';
import React from 'react';
import AddressPopup from '../components/address-popup/address-popup';

const products: OrderProduct[] = [
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.MONDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 5,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
];
const Testing: NextPage = ({}) => (
	<div className='bg-red'>
		<BodyClamp>
			<CartItems products={products}/>
			<AddressPopup/>
		</BodyClamp>
		<div className='flex flex-col gap-2'>
			{Array(100).fill('').map((_, index) =>
				<span key={index} className='bg-black py-96 text-white text-3xl grid place-items-center'>{index + 1}</span>,
			)}
		</div>
		{/*<Icon iconName={IconName.TICK} colour={Colour.WHITE}/>*/}
		{/*<Icon iconName={IconName.TICK} colour={Colour.BLACK}/>*/}
		{/*<Icon iconName={IconName.SHOPPING_CART} colour={Colour.WHITE}/>*/}
		{/*<Dropdown options={['hello']}/>*/}
	</div>
);

export default Testing;
