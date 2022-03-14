import React from 'react';
import { ProductProps } from './product';
import ProductExpandedDropdown from './product-expanded-dropdown';
import Button, { Colour, Proportion, Size } from '../button/button';
import Counter, { CounterHandle, CounterRef, createCounterRef } from '../general/counter';

type ProductExpandedProps = {
	product: ProductProps,
}

// TODO: implement cart adding
// TODO: implement quantity changing
// TODO: fix for meal packs specific stuff

const ProductExpanded: React.FC<ProductExpandedProps> = ({product}) => {
	const counterRef = createCounterRef();

	return (
		<article className={`flex flex-col bg-white`}>
			<img src={product.imageUrl} className='h-[200px] object-cover object-center' style={{width: 'clamp(350px, 600px, 95vw)'}}/>
			<div className='flex flex-col p-6 gap-2'>
				{/* TODO: missing delivery stuff */}
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
					<div className='pt-4'>
						<h2 className='font-bold'>Size</h2>
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
				<div className='pt-4'>
					<Counter ref={counterRef}/>
				</div>
				<Button padding={Size.LARGE} width={Proportion.FULL} colour={Colour.RED}>Add to cart - ${product.cost}</Button>
			</div>
		</article>
	);
};

export default ProductExpanded;
