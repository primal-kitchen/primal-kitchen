import ProductSection from './product-section';
import BodyClamp from '../utilities/body-clamp';

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
		<div className='text-red text-lg font-bold uppercase mb-9 md:mb-16'>
			<BodyClamp className='pb-1'>
				<div className='flex flex-row justify-center gap-2 md:gap-5'>
					{
						productSections.map(productSection => (
							<div key={productSection.heading}
								 className={`underline-offset-4 decoration-4 ${productSection.active ? 'underline' : ''}`}>
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
	</section>
);

export default ProductSections;
