import React from 'react';

enum Proportion {
	FIT,
	FULL,
}

enum Colour {
	RED,
	RED_INVERTED,
}

enum Size {
	MEDIUM,
	LARGE,
}

type Props = {
	width: Proportion,
	colour: Colour,
	padding: Size,
}

const Button: React.FC<Props> = ({width = Proportion.FIT, colour = Colour.RED, padding = Size.MEDIUM, children}) => {
	const widthClass = width === Proportion.FIT ? 'w-fit' : 'w-full';
	const colourClass = colour === Colour.RED ? 'bg-red text-white' : 'bg-white text-red';
	const paddingClass = padding === Size.MEDIUM ? 'p-2' : 'p-3';

	return (
		<button className={`${widthClass} h-fit rounded ${colourClass} ${paddingClass}`}>{children}</button>
	);
};

export {
	Proportion,
	Colour,
	Size,
}

export default Button;
