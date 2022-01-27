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
	</section>
);

export default SplashScreen;
