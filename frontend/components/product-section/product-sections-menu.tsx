import BodyClamp from '../utilities/body-clamp';
import React, { createRef, useCallback } from 'react';
import { TProductSection } from './product-sections';
import ProductSectionsMenuItem from './product-sections-menu-item';

type ProductSectionMenuRef = HTMLDivElement;

type Props = {
	productSections: TProductSection[],
}

const useNavHeight = () => {
	// return document?.getElementById('nav')?.clientHeight;
	// TODO: get nav height properly...
	return 50;
};

const ProductSectionsMenu = (props: Props) => {
	const navHeight = useNavHeight();
	const ref = createRef<ProductSectionMenuRef>();

	const scrollToProductSection = useCallback((productSection: TProductSection): void => {
		const height = ref.current?.clientHeight ?? 0;
		const distanceFromViewPortTop = productSection.ref.current?.getBoundingClientRect().y ?? 0;
		// TODO: properly calculate this dodgy extra. it's mostly because not calculating the bottom margin from product sections menu i think
		const extra = 36;
		const amountToScroll = distanceFromViewPortTop - (height + navHeight + extra);
		window.scrollBy({top: amountToScroll, behavior: 'smooth'});
	}, [ref, navHeight]);

	return (
		<>
			<BodyClamp>
				{/* TODO: margin bottom calculation is based off of padding to secondary menu below */}
				<div className='flex items-center justify-center w-full font-roboto font-bold uppercase text-4xl my-9 md:mt-16 md:mb-13'>
					our menu
				</div>
			</BodyClamp>
			<div className='sticky top-[calc(5vh+1rem)] text-red text-lg font-bold uppercase mb-9 md:mb-16 pt-3 bg-white' ref={ref}>
				<BodyClamp className='pb-2'>
					<div className='flex flex-row justify-center gap-3 md:gap-5'>
						{
							props.productSections.map(productSection => (
									<ProductSectionsMenuItem
										key={productSection.heading}
										heading={productSection.heading}
										productSectionRef={productSection.ref}
										onClick={
											(event: any) => {
												event.preventDefault();
												scrollToProductSection(productSection);
											}
										}
									/>
								),
							)
						}
					</div>
				</BodyClamp>
				<hr className='text-light-grey'/>
			</div>
		</>
	);
}

export default ProductSectionsMenu;

export type {
	ProductSectionMenuRef,
};
