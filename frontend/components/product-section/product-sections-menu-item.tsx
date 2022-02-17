import React from 'react';
import { ProductSectionRef } from './product-section';
import useIsVisible from '../utilities/use-is-visible';

type Props = {
	heading: string,
	productSectionRef: React.RefObject<ProductSectionRef>,
	onClick?: React.MouseEventHandler<HTMLDivElement>,
	isActive: boolean,
}

const ProductSectionsMenuItem: React.FC<Props> = ({heading, productSectionRef, onClick, isActive}) => {
	// const isProductSectionVisible = useIsVisible(productSectionRef);

	return (
		<div className={`underline-offset-8 decoration-4 ${isActive ? 'underline' : ''}`}
			 onClick={onClick}>
			{heading}
		</div>
	);
};

export default ProductSectionsMenuItem;
