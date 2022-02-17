import React from 'react';
import { ProductSectionRef } from './product-section';
import useIsVisible from '../utilities/use-is-visible';

type Props = {
	heading: string, productSectionRef: React.RefObject<ProductSectionRef>, onClick?: React.MouseEventHandler<HTMLDivElement>,
}

const ProductSectionMenuItem: React.FC<Props> = ({heading, productSectionRef, onClick}) => {
	const isProductSectionVisible = useIsVisible(productSectionRef);

	return (
		<div className={`underline-offset-8 decoration-4 ${isProductSectionVisible ? 'underline' : ''}`}
			 onClick={onClick}>
			{heading}
		</div>
	);
};

export default ProductSectionMenuItem;
