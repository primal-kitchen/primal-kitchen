import { NextPage } from 'next';
import BodyClamp from '../components/utilities/body-clamp';
import Button, { Proportion, Size, Colour as ButtonColour } from '../components/general/button';
import React, { useLayoutEffect, useState } from 'react';
import { Day, ProductProps } from '../components/product/product';
import CartItems from '../components/cart/cart-items';
import CartTrayType from '../components/cart/cart-tray-type';
import useNavHeight from '../components/nav/use-nav-height';
import { useWindowSize } from 'react-use';

type OrderProduct = ProductProps & { quantity: number };
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
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
	{
		title: 'Herb Roasted Lamb Shoulder',
		cost: 16.95,
		daysProductIsFor: [Day.THURSDAY],
		imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
		quantity: 3,
	},
];

const Cart: NextPage = () => {
	const navHeight = useNavHeight();
	const [height, setHeight] = useState<number>(0);
	const {height: windowHeight} = useWindowSize();

	useLayoutEffect(() => {
		const extra: number = 16; // accounts for body clamp padding. a bit shit but 🤷
		const remainingScreenSpace: number = windowHeight - navHeight - extra;
		if (remainingScreenSpace >= 0) setHeight(remainingScreenSpace);
	}, [navHeight, setHeight, windowHeight]);

	return (
		<BodyClamp>
			{/* could avoid setting height like this by some css like: h-[calc(100vh-${navHeight}px)] */}
			<div className={`grid grid-cols-1 grid-rows-1 auto-rows-min gap-4 w-full`}
				 style={{height: `${height}px`, maxHeight: `${height}px`}}>
				<div className='self-start h-full'>
					<CartItems products={products}/>
				</div>
				<h1 className='text-2xl font-bold'>Specific requests</h1>
				<CartTrayType/>
				<div>
					<p className='pb-1'><b>Instructions.</b> NB: we offer dairy free, nut free and low starch (keto).</p>
					<textarea className='w-full min-h-[5rem] border'/>
				</div>
				<div className='flex flex-row gap-4 text-2xl font-bold place-self-end'>
					<h1>Subtotal</h1>
					<h1>$32.90</h1>
				</div>
				<Button padding={Size.LARGE} width={Proportion.FIT} colour={ButtonColour.RED} className='place-self-end'>Next</Button>
			</div>
		</BodyClamp>
	);
};

export default Cart;
