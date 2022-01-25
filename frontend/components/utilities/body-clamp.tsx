import React from 'react';

// TODO: might want to add colour to props, it's probably always required
type Props = {
	children: any,
	className?: string,
}

const BodyClamp: React.FC<Props> = ({children, className= ''}) => {
	// TODO: maybe need to strip spaces from front and back of className
	return (
		<div className={`max-w-screen-xl min-w-screen-xs overflow-x-scroll ${className}`}>
			{children}
		</div>
	);
};

export default BodyClamp;
