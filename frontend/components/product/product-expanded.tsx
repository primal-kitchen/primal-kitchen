import React from 'react';
import { ProductProps } from './product';
import ProductExpandedDropdown from './product-expanded-dropdown';

type ProductExpandedProps = {
	product: ProductProps,
}

const ProductExpanded: React.FC<ProductExpandedProps> = ({product}) => (
	<article className={`flex flex-col bg-white`}>
		<img className='w-full' src={product.imageUrl}/>
		<h1 className='font-bold text-2xl'>{product.title}</h1>
		<p>{product.description}</p>
		<ProductExpandedDropdown title='Ingredients'>
			blah
		</ProductExpandedDropdown>
		<ProductExpandedDropdown title='Nutritional information'>
			blah
		</ProductExpandedDropdown>
		{
			product.options &&
			<div>
				<h2>Size</h2>
				{
					product.options.map(option => {
						const identifier = `${product.title}-${option}`;

						return (
							<div key={identifier}>
								<input id={identifier} name='size' type='radio' value={option}/>
								<label htmlFor={identifier}>{option} (xxxg protein)</label>
							</div>
						);
					})
				}
			</div>
		}
	</article>
);

export default ProductExpanded;
