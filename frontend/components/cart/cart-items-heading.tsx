import React from 'react';

const CartItemsHeading: React.FC<{ className: string }> = ({className}) => {
	const commonClasses = 'self-end sticky top-0 bg-white w-full text-center';

	return (
		<div className={`font-bold capitalize ${className}`}>
			<h1 className={`justify-self-start text-2xl ${commonClasses} !text-left`}>summary</h1>
			<h1 className={`justify-self-start ${commonClasses} !text-left`}>size</h1>
			<h1 className={commonClasses}>quantity</h1>
			<h1 className={commonClasses}>total</h1>
			<h1 className={commonClasses}>remove</h1>
		</div>
	);
};

export default CartItemsHeading;
