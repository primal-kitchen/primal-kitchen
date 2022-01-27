import React from 'react';

// TODO: might want to add colour to props, it's probably always required
type Props = {
	children: any,
	className?: string,
	style?: any,
}

const BodyClamp: React.FC<Props> = ({children, className = '', style}) => {
	// TODO: maybe need to strip spaces from front and back of className
	return (
		<div className={`grid justify-items-center max-w-screen-xl min-w-screen-xs w-full overflow-x-scroll ${className}`} style={style}>
			{children}
		</div>
	);
};

export default BodyClamp;
