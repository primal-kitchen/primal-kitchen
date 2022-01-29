import ProductSection from './product-section';
import BodyClamp from '../utilities/body-clamp';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { Day, Options, ProductProps } from '../product/product';

type TProductSection = {
	heading: string,
	headingExtension?: string,
	description?: any,
	items: ProductProps[],
	active?: boolean,
	ref: any,
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
		ref: createRef(),
		items: [
			{
				daysProductIsFor: [Day.MONDAY],
				imageUrl: 'images/delete-me/spinach-dijon-chicken.png',
				title: 'Spinach Djion Chicken',
			},
			{
				daysProductIsFor: [Day.MONDAY],
				imageUrl: 'images/delete-me/spinach-tandori-chicken.png',
				title: 'Spinach Tandoori Chicken',
			},
			{
				daysProductIsFor: [Day.MONDAY],
				imageUrl: 'images/delete-me/tandoori-meatballs.png',
				title: 'Tandoori Meatballs',
			},
			{
				daysProductIsFor: [Day.MONDAY],
				imageUrl: 'images/delete-me/hungarian-braised-beef.png',
				title: 'Hungarian Braised Beef',
			},
			{
				daysProductIsFor: [Day.MONDAY],
				imageUrl: 'images/delete-me/crumbed-chicken-parmigiana.png',
				title: 'Crumbed Chicken Parmigiana',
			},
		],
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
		ref: createRef(),
		items: [
			{
				daysProductIsFor: [Day.MONDAY, Day.FRIDAY],
				imageUrl: 'images/delete-me/meal-pack.png',
				title: '5 meal packs',
				options: [Options.REGULAR, Options.WARRIOR, Options.FAMILY],
			},
			{
				daysProductIsFor: [Day.MONDAY, Day.SATURDAY],
				imageUrl: 'images/delete-me/meal-pack.png',
				title: '6 meal packs',
				options: [Options.REGULAR, Options.WARRIOR, Options.FAMILY],
			},
			{
				daysProductIsFor: [Day.MONDAY, Day.SUNDAY],
				imageUrl: 'images/delete-me/meal-pack.png',
				title: '7 meal packs',
				options: [Options.REGULAR, Options.WARRIOR, Options.FAMILY],
			},
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/meal-pack.png',
				title: '10 meal packs',
				options: [Options.REGULAR, Options.WARRIOR, Options.FAMILY],
			},
		],
	},
	{
		heading: 'deli',
		description: (<p>Breakfast Granola, Paleo Bars, Baking Premixes and treats</p>),
		ref: createRef(),
		items: [
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/granola-cherry-and-pecan.png',
				title: 'Granola - Cherry and Pecan',
			},
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/granola-cinnamon-vanilla.png',
				title: 'Granola - Cinnamon Vanilla',
			},
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/muffin-mix-chocolate-chip.png',
				title: 'Muffin Mix - Chocolate Chip',
			},
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/muffin-mix-cinnamon-raisin.png',
				title: 'Muffin Mix - Cinnamon Raisin',
			},
		],
	},
	{
		heading: 'extras',
		ref: createRef(),
		items: [
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/cooler-bag.png',
				title: 'Cooler Bag',
			},
			{
				daysProductIsFor: [Day.NONE],
				imageUrl: 'images/delete-me/chilltainer.png',
				title: 'Chilltainer',
			},
		],
	},
];

const useNavHeight = () => {
	// return document?.getElementById('nav')?.clientHeight;
	// TODO: get nav height properly...
	return 50;
};

const ProductSections = () => {
	const [activeProductSection, setActiveProductSection] = useState(productSections[0]);
	// useEffect onscroll to calculate active product section
	// useEffect(() => {
	// 	window.onscroll.
	// }, [])

	const productSectionsMenuRef = useRef<HTMLElement>();
	const navHeight = useNavHeight();

	const scrollToProductSection = (productSection: TProductSection): void => {
		const productSectionsMenuHeight = productSectionsMenuRef.current?.clientHeight;
		const productSectionDistanceFromViewPortTop = productSection.ref.current.getBoundingClientRect().y;
		// TODO: properly calculate this dodgy extra. it's mostly because not calculating the bottom margin from product sections menu i think
		const extra = 36;
		const amountToScroll = productSectionDistanceFromViewPortTop - (productSectionsMenuHeight + navHeight + extra);
		window.scrollBy({top: amountToScroll, behavior: 'smooth'});
	};

	return (
		<section className=''>
			{/* TODO: margin-bottom stuff needs to match menu heading */}
			{/* TODO: top calc should be based off of nav css variables */}
			<BodyClamp>
				{/* TODO: margin bottom calculation is based off of padding to secondary menu below */}
				<div className='flex items-center justify-center w-full font-roboto font-bold uppercase text-4xl my-9 md:mt-16 md:mb-13'>
					our menu
				</div>
			</BodyClamp>
			<div className='sticky top-[calc(5vh+1rem)] text-red text-lg font-bold uppercase mb-9 md:mb-16 pt-3 bg-white'
				 ref={productSectionsMenuRef}>
				<BodyClamp className='pb-2'>
					<div className='flex flex-row justify-center gap-3 md:gap-5'>
						{
							productSections.map(productSection => (
								<div key={productSection.heading}
									 className={`underline-offset-8 decoration-4 ${productSection.active ? 'underline' : ''}`}
									 onClick={event => {
										 event.preventDefault();
										 scrollToProductSection(productSection);
									 }}>
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
										description={productSection.description}
										ref={productSection.ref}/>
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
};

export default ProductSections;
