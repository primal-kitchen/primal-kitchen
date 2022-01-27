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
		items: [],
	},
	{heading: 'deli', items: []},
	{heading: 'extras', items: []},
];

const ProductSections = () => (
	<section className=''>
		{/* TODO: margin-bottom stuff needs to match menu heading */}
		<div className='text-red text-lg font-bold uppercase mb-9 md:mb-16'>
			<BodyClamp>
				<div className='flex flex-row justify-center gap-2 md:gap-5'>
					{
						productSections.map(productSection => (
							<div key={productSection.heading}
								 className={`underline-offset-4 decoration-4 pb-2 ${productSection.active ? 'underline' : ''}`}>
								{productSection.heading}
							</div>
						))
					}
				</div>
				<hr className='text-light-grey'/>
			</BodyClamp>
		</div>
		{
			productSections.map(productSection => (
				<ProductSection key={productSection.heading}
								heading={`${productSection.heading}${productSection.headingExtension ?? ''}`}
								items={productSection.items}
								description={productSection.description}/>
			))
		}
	</section>
);

export default ProductSections;
