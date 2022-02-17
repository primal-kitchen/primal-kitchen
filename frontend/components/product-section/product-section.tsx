import React from 'react';
import BodyClamp from '../utilities/body-clamp';
import Product, { ProductProps } from '../product/product';

type Props = {
	heading: string,
	description?: any,
	items: ProductProps[],
};

type ProductSectionRef = HTMLDivElement;

const ProductSection = ({heading, description, items}: Props, ref: React.ForwardedRef<ProductSectionRef>) => (
	<div className='' ref={ref}>
		<BodyClamp>
			<h1 className='font-bold text-lg uppercase'>{heading}</h1>
			<div className='text-center'>{description}</div>
			<div className='grid justify-center gap-6 w-full mt-6' style={{gridTemplateColumns: 'repeat(auto-fit, 300px)'}}>
				{
					items.map(item => <Product key={item.title}
											   title={item.title}
											   imageUrl={item.imageUrl}
											   daysProductIsFor={item.daysProductIsFor}
											   options={item?.options}
											   cost={item.cost}/>,
					)
				}
			</div>
		</BodyClamp>
	</div>
);

ProductSection.displayName = 'ProductSection';

export default React.forwardRef(ProductSection);

export type {
	ProductSectionRef,
};
