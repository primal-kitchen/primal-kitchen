import React from 'react';

enum TrayType {
	PLASTIC = 'plastic',
	COMPOSTABLE = 'compostable',
}

const CartTrayType: React.FC<{ defaultTrayType?: TrayType }> = ({ defaultTrayType }) => (
	<div>
		<h2 className='text-md font-bold'>Meals — tray type</h2>
		{
			Object.keys(TrayType).map(value =>
				(<div key={value} className='flex flex-row gap-1'>
					<input id={value} name='size' type='radio' value={value}/>
					<label htmlFor={value}>{value}</label>
				</div>),
			)
		}
	</div>
);

export default CartTrayType;

export {
	TrayType,
}
