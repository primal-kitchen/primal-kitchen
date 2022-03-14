import { Day, ProductProps } from '../product/product';
import Dropdown from '../general/dropdown';
import Counter, { createCounterRef } from '../general/counter';
import Icon, { Colour as IconColour, IconName } from '../general/icon';
import React from 'react';

type OrderProduct = ProductProps & { quantity: number }

const CartItemsEntry: React.FC<{product: OrderProduct}> = ({ product }) => (
	<div key={product.title} className='md:contents w-min gap-6 grid grid-cols-[max-content_auto_min-content]'>
		<img src={product.imageUrl} className='md:hidden object-cover aspect-square w-[12.5vmin] min-w-[45px]'/>
		<div className='md:contents'>
			<div className='justify-self-start w-max'>
				<div className='contents md:flex flex-row'>
					<img src={product.imageUrl} className='hidden md:block object-cover aspect-square w-[60px] justify-self-start'/>
					<div className='contents md:block pl-2'>
						<h1 className='text-red underline capitalize'>{product.title}</h1>
						<h2>delivered <b className='capitalize'>{Day[product.daysProductIsFor[0]]}</b></h2>
					</div>
				</div>
			</div>
			<div className='md:contents flex flex-row gap-4 py-2'>
				<Dropdown options={['Warrior', 'Regular']} className='justify-self-start'/>
				<Counter ref={createCounterRef()}/>
			</div>
			<h2 className=''>${product.cost}</h2>
		</div>
		<Icon iconName={IconName.MENU_CLOSE} colour={IconColour.BLACK} widthInPixels={20}/>
	</div>
)

export type {
	OrderProduct,
}

export default CartItemsEntry;
