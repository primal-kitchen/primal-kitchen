import React from 'react';

enum IconName {
	MENU_CLOSE = 'icons/menu-close.svg#menu-close',
	MENU_OPEN = 'icons/menu-open.svg#menu-open',
	SHOPPING_CART = 'icons/shopping-cart.svg#shopping-cart',
	TICK = 'icons/tick.svg#tick',
	PLUS = 'icons/plus.svg#plus',
	MINUS = 'icons/minus.svg#minus',
}

enum Colour {
	WHITE = 'fill-white',
	BLACK = 'fill-black',
}

type Props = {
	iconName: IconName,
	colour: Colour,
	sizeInPixels?: number,
}

const Icon: React.FC<Props> = ({iconName, colour, sizeInPixels = 30}) => {
	const svgReference = iconName;
	const colourClass: string = colour;

	return (
		<div className={`max-w-[${sizeInPixels}px] max-h-[${sizeInPixels}px]`}>
			<svg className={`${colourClass}`}
				 viewBox='0 0 100 100'
				 xmlns='http://www.w3.org/2000/svg' version='1.1'>
				<use xlinkHref={svgReference}/>
			</svg>
		</div>
	);
};

export {
	IconName,
	Colour,
};

export default Icon;
