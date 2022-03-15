import React from 'react';
import BodyClamp from '../utilities/body-clamp';
import Button, { Colour, Proportion, Size } from '../general/button';
import InvisibleFixedPageOverlay from '../utilities/invisible-fixed-page-overlay';
import AddressPopup from '../address-popup/address-popup';
import { useToggle } from 'react-use';

const SplashScreenDeliveryExplanation = () => {
	const [isAddressPopupVisible, toggleAddressPopupVisibility] = useToggle(false);

	return (
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
					<div className='mb-1'>
						<Button padding={Size.MEDIUM} width={Proportion.FIT} colour={Colour.RED_INVERTED} onClick={toggleAddressPopupVisibility}>Select store</Button>
						<InvisibleFixedPageOverlay isVisible={isAddressPopupVisible} onOutsideContentClicked={toggleAddressPopupVisibility}>
							<AddressPopup/>
						</InvisibleFixedPageOverlay>
					</div>
				</div>
			</div>
		</BodyClamp>
	);
};

export default SplashScreenDeliveryExplanation;
