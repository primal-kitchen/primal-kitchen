import React, { useState } from 'react';
import ProductExpanded from './product-expanded';
import InvisibleFixedPageOverlay from '../utilities/invisible-fixed-page-overlay';

enum Day {
	MONDAY,
	TUESDAY,
	WEDNESDAY,
	THURSDAY,
	FRIDAY,
	SATURDAY,
	SUNDAY,
	NONE,
}

enum DeliveryDay {
	MONDAY,
	WEDNESDAY,
}

enum Options {
	REGULAR,
	WARRIOR,
	FAMILY,
}

const capitalize = (word: string): string => word[0].toUpperCase() + word.substring(1).toLowerCase();

const daysToDeliveryDay = (days: Day[]): string => {
	if (days[0] < Day.WEDNESDAY) return capitalize(DeliveryDay[DeliveryDay.MONDAY]);
	else return capitalize(DeliveryDay[DeliveryDay.WEDNESDAY]);
};

const daysProductIsForToText = (days: Day[]): string => {
	const firstDay = Day[days[0]];
	const lastDay = Day[days[days.length - 1]];

	if (days.length === 1) return `${capitalize(firstDay)} -`;
	else return `${capitalize(firstDay)} - ${capitalize(lastDay)} meals`;
};

type ProductProps = {
	imageUrl: string,
	title: string,
	daysProductIsFor: Day[],
	options?: Options[],
	cost: number,
	description?: string,
}

const Product: React.FC<ProductProps> = (product) => {
	const [isProductExpandedVisible, setIsProductExpandedVisible] = useState(false);

	return (
		<article className='flex flex-col items-center border border-light-grey rounded-md overflow-clip' onClick={() => setIsProductExpandedVisible(true)}>
			{/* TODO: move to next/image */}
			<img className='w-full aspect-[3/2] object-cover' src={product.imageUrl}/>
			<div className='p-3 text-center'>
				<h1 className='text-red text-lg font-bold'>{product.title}</h1>
				{
					product.options !== undefined &&
					<div className='flex flex-row justify-center gap-2 text-sm pb-3'>
						{
							product.options.map(option => Options[option])
								.map(capitalize)
								.map(option => <div key={option}>{option}</div>)
						}
					</div>
				}
				{
					product.daysProductIsFor[0] !== Day.NONE &&
					<div className=''>
						{daysProductIsForToText(product.daysProductIsFor)} <b>delivered {daysToDeliveryDay(product.daysProductIsFor)}</b>
					</div>
				}
			</div>
			<InvisibleFixedPageOverlay isVisible={isProductExpandedVisible}
									   onOutsideContentClicked={() => setIsProductExpandedVisible(false)}>
				<ProductExpanded product={product}/>
			</InvisibleFixedPageOverlay>
		</article>
	);
};

export default Product;
export {
	Day,
	Options,
};
export type {
	ProductProps,
};

