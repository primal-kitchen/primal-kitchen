import React from 'react';
import BodyClamp from '../utilities/body-clamp';
import SplashScreenCoverImage from './splash-screen-cover-image';
import SplashScreenDeliveryExplanation from './splash-screen-delivery-explanation';

const SplashScreen = () => (
	<section className=''>
		<div className='h-[60vh]'>
			<SplashScreenCoverImage/>
		</div>
		<SplashScreenDeliveryExplanation/>
		<BodyClamp>
			<div className='flex items-center justify-center w-full font-roboto font-bold uppercase text-4xl my-9 md:my-16'>
				our menu
			</div>
		</BodyClamp>
	</section>
);

export default SplashScreen;
