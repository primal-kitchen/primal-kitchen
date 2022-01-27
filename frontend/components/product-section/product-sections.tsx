import ProductSection from './product-section';
import BodyClamp from '../utilities/body-clamp';
import React from 'react';

type TProductSection = {
	heading: string,
	headingExtension?: string,
	description?: any,
	items: [],
	active?: boolean,
}
const productSections: TProductSection[] = [
	{
		heading: 'single meals',
		headingExtension: '- next week\'s menu',
		description: (
			<p>
				Meals come in Regular size ($<b>13.95</b>), or upsize your protein and vegetable portions to Warrior size ($<b>16.95</b>).
				<br/>
				<b>Dairy free, nut free and low starch / keto options are available</b> - let us know in your <a
				className='text-red underline'>shopping cart</a>.
			</p>
		),
		items: [],
		active: true,
	},
	{
		heading: 'meal packs',
		description: (
			<p>
				Available in a range of sizes - Regular, Warrior and Family (designed for families with 2 adults and 2 children under 12).
				<br/>
				See the menu above for the meals in next week’s packs.
			</p>
		),
		items: [],
	},
	{
		heading: 'deli',
		description: (<p>Breakfast Granola, Paleo Bars, Baking Premixes and treats</p>),
		items: [],
	},
	{heading: 'extras', items: []},
];

const ProductSections = () => (
	<section className=''>
		{/* TODO: margin-bottom stuff needs to match menu heading */}
		{/* TODO: top calc should be based off of nav css variables */}
		<BodyClamp>
			{/* TODO: margin bottom calculation is based off of padding to secondary menu below */}
			<div className='flex items-center justify-center w-full font-roboto font-bold uppercase text-4xl my-9 md:mt-16 md:mb-13'>
				our menu
			</div>
		</BodyClamp>
		<div className='sticky top-[calc(5vh+1rem)] text-red text-lg font-bold uppercase mb-9 md:mb-16 pt-3 bg-white'>
			<BodyClamp className='pb-2'>
				<div className='flex flex-row justify-center gap-3 md:gap-5'>
					{
						productSections.map(productSection => (
							<div key={productSection.heading}
								 className={`underline-offset-8 decoration-4 ${productSection.active ? 'underline' : ''}`}>
								{productSection.heading}
							</div>
						))
					}
				</div>
			</BodyClamp>
			<hr className='text-light-grey'/>
		</div>
		{/* TODO: gap stuff needs to match menu heading */}
		<div className='flex flex-col gap-9 md:gap-16'>
			{
				productSections.map(productSection => (
					<ProductSection key={productSection.heading}
									heading={`${productSection.heading}${productSection.headingExtension ?? ''}`}
									items={productSection.items}
									description={productSection.description}/>
				))
			}
		</div>
		<div className='flex flex-col gap-2'>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
			<span className='bg-black py-96'>x</span>
		</div>
	</section>
);

export default ProductSections;
