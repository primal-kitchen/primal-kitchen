import BodyClamp from '../utilities/body-clamp';
import React from 'react';

const SplashScreenDeliveryExplanation = () => (
	<BodyClamp className='bg-red'>
		<div className='grid md:grid-cols-[max-content_auto] grid-rows-[repeat(4,auto)] gap-3 justify-center px-1 pt-1 bg-red'>
			<img src='images/chef.png' className='hidden md:block row-span-full place-self-end'/>
			<div className='text-white contents w-[60%] overflow-x-scroll'>
				<h1 className='text-2xl font-bold self-end'>We cook and deliver fresh twice per week</h1>
				<p>
					Our menu is updated every Saturdary. <b>Order by Friday 9pm</b> for delivery the following week.
					In <b>Wellington, Christchurch and Auckland</b>: Monday - Wednesday meals are delivered on <b>Monday</b>,
					and
					remaining meals on <b>Thursday</b>.
					<br/>
					For the <b>rest of the country</b>: Monday - Wednesday meals are delivered on <b>Tuesday</b>, and
					remaining
					meals
					on <b>Thursday</b>.
				</p>
				<p>
					We recommend you select a store before continuing as some items are not available at all stores.
				</p>
				<button className='w-fit h-fit p-2 mb-1 rounded bg-white text-red'>Select store</button>
			</div>
		</div>
	</BodyClamp>
);

export default SplashScreenDeliveryExplanation;
