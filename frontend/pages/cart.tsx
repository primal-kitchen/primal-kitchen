import { NextPage } from 'next';
import BodyClamp from '../components/utilities/body-clamp';
import Button, { Proportion, Size, Colour as ButtonColour } from '../components/button/button';
import React from 'react';
import { Day, ProductProps } from '../components/product/product';
import Icon, { Colour as IconColour, IconName } from '../components/icon/icon';
import Counter, { createCounterRef } from '../components/general/counter';
import Dropdown from '../components/general/dropdown';

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
];

enum TrayType {
	PLASTIC = 'plastic',
	COMPOSTABLE = 'compostable',
}

const Cart: NextPage = () => {

	return (
		<BodyClamp className='mt-4 w-full h-full'>
			<div className='flex flex-col gap-4 w-full px-2'>
				<div className='flex flex-col gap-2'>
					{products.map(product => (
						<div key={product.title} className='grid grid-cols-[max-content_auto_min-content] gap-4 border border-light-grey'>
							<img src={product.imageUrl} className='object-cover aspect-square w-[12.5vmin] min-w-[45px]'/>
							<div className=''>
								<h1 className='text-red underline capitalize'>{product.title}</h1>
								<h2>delivered <b className='capitalize'>{Day[product.daysProductIsFor[0]]}</b></h2>
								<div className='flex flex-row gap-4 py-2'>
									<Dropdown options={['Warrior', 'Regular']}/>
									<Counter ref={createCounterRef()}/>
								</div>
								<h2>${product.cost}</h2>
							</div>
							<Icon iconName={IconName.MENU_CLOSE} colour={IconColour.BLACK} />
						</div>
					))}
				</div>
				<h1 className='text-2xl font-bold'>Specific requests</h1>
				<div>
					<h2 className='text-lg font-bold'>Meals — tray type</h2>
					{
						Object.keys(TrayType).map(value =>
							(<div key={value} className='flex flex-row gap-1'>
								<input id={value} name='size' type='radio' value={value}/>
								<label htmlFor={value}>{value}</label>
							</div>),
						)
					}
					<div></div>
				</div>
				<div>
					<p className='pb-1'><b>Instructions.</b> NB: we offer dairy free, nut free and low starch (keto).</p>
					<textarea className='w-full min-h-[5rem] border'/>
				</div>
				<div className='flex flex-row gap-4 text-2xl font-bold place-self-end'>
					<h1>Subtotal</h1>
					<h1>$32.90</h1>
				</div>
				<div className='place-self-end'>
					<Button padding={Size.LARGE} width={Proportion.FIT} colour={ButtonColour.RED}>Next</Button>
				</div>

			</div>
		</BodyClamp>
	);
};

export default Cart;
