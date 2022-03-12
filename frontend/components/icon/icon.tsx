import React from 'react';

enum IconName {
	MENU_CLOSE = 'icons/menu-close.svg#menu-close',
	MENU_OPEN = 'icons/menu-open.svg#menu-open',
	SHOPPING_CART = 'icons/shopping-cart.svg#shopping-cart',
	TICK = 'icons/tick.svg#tick',
}

enum Colour {
	WHITE = 'fill-white',
	BLACK = 'fill-black',
}

type Props = {
	iconName: IconName,
	colour: Colour,
}

const Icon: React.FC<Props> = ({iconName, colour}) => {
	const svgReference = iconName;
	const colourClass: string = colour;

	console.log(`😃 ${svgReference} ${colour}`);

	return (
		<svg className={`w-[30px] h-[30px] ${colourClass}`} viewBox='0 0 100 100' xmlns="http://www.w3.org/2000/svg" version="1.1">
			<use xlinkHref={svgReference}/>
		</svg>
	)
}

export {
	IconName,
	Colour,
}

export default Icon;
