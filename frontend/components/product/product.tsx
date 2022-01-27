import React from 'react';

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

type Props = {
	imageUrl: string,
	title: string,
	daysProductIsFor: Day[],
};

const Product: React.FC<Props> = ({imageUrl, title, daysProductIsFor}) => (
	<article className='flex flex-col items-center border border-light-grey rounded-md overflow-clip'>
		<img className='w-full aspect-[3/2] object-cover' src={imageUrl}/>
		<div className='p-3 text-center'>
			<h1 className='text-red text-lg font-bold'>{title}</h1>
			<div className=''>
				{daysProductIsForToText(daysProductIsFor)} <b>delivered {daysToDeliveryDay(daysProductIsFor)}</b>
			</div>
		</div>
	</article>
);

export default Product;
export {
	Day,
};
