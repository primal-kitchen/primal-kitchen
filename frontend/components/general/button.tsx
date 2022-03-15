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
	enabled?: boolean,
	className?: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<Props> = ({
									 width = Proportion.FIT,
									 colour = Colour.RED,
									 padding = Size.MEDIUM,
									 className = '',
									 children,
									 enabled = true,
									 onClick = event => {},
								 }) => {
	const widthClass = width === Proportion.FIT ? 'w-fit' : 'w-full';
	const colourClass = colour === Colour.RED ? 'bg-red text-white' : 'bg-white text-red';
	const ifDisabledClass = enabled ? '' : 'opacity-25';
	const paddingClass = padding === Size.MEDIUM ? 'p-2' : 'py-3 px-6';

	return (
		<button className={`${widthClass} h-fit rounded ${colourClass} ${ifDisabledClass} ${paddingClass} ${className}`}
				onClick={onClick}>{children}</button>
	);
};

export {
	Proportion,
	Colour,
	Size,
};

export default Button;
