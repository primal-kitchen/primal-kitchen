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
	widthInPixels?: number,
	heightInPixels?: number,
	className?: string,
}

const defaultSizeInPixels = 30;

const Icon: React.FC<Props> = ({iconName, colour, widthInPixels, heightInPixels, className = ''}) => {
	const svgReference = iconName;
	const colourClass: string = colour;

	return (
		<svg className={`${colourClass} ${className}`}
			 width={`${widthInPixels ?? heightInPixels ?? defaultSizeInPixels}px`}
			 height={`${heightInPixels ?? widthInPixels ?? defaultSizeInPixels}px`}
			 viewBox='0 0 100 100'
			 xmlns='http://www.w3.org/2000/svg' version='1.1'>
			<use xlinkHref={svgReference}/>
		</svg>
	);
};

export {
	IconName,
	Colour,
};

export default Icon;
