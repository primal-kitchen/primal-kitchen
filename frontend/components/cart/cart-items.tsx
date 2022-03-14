import React from 'react';
import CartItemsHeading from './cart-items-heading';
import CartItemsEntry, { OrderProduct } from './cart-items-entry';

type CartItemsProps = { products: OrderProduct[] }

const CartItems: React.FC<CartItemsProps> = ({products}) => (
	<div className='flex flex-col gap-2 w-full md:grid grid-cols-[1fr,repeat(4,min-content)] md:place-items-center md:gap-x-11 lg:gap-x-20'>
		<CartItemsHeading/>
		{products.map(product =>
			<CartItemsEntry key={product.title} product={product}/>,
		)}
	</div>
);

export default CartItems;
