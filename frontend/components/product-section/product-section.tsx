import React from 'react';
import BodyClamp from '../utilities/body-clamp';

type Props = {
	heading: string,
	description?: any,
	items: any,
};

const ProductSection: React.FC<Props> = ({ heading, description, items }) => (
	<div className=''>
		<BodyClamp>
			<h1 className='font-bold text-lg uppercase'>{heading}</h1>
			<div className='text-center'>{description}</div>
			<div>items here</div>
		</BodyClamp>
	</div>
);

export default ProductSection;
