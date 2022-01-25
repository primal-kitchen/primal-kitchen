import React from 'react';
import BodyClamp from '../utilities/body-clamp';

const SplashScreenListItem: React.FC<{ children: any }> = props => {
	return (
		<div className='flex gap-3'>
			<img src='tick.svg'/>
			<p className=''>{props.children}</p>
		</div>
	);
};

const SplashScreen = () => {
	return (
		<section className=''>
			<div className='h-[60vh]'>
				<div className='h-full text-white bg-cover flex flex-col items-center' style={{backgroundImage: 'url(cover.png)'}}>
					<div className='w-max h-full flex flex-col justify-center items-center mt-8'>
						<h1 className='font-libre-franklin font-bold text-5xl self-start'>Paleo Meals</h1>
						<h2 className='font-libre-franklin font-bold text-3xl mt-5 mb-[25%] self-start'>... delivered fresh</h2>
						<div className='flex flex-col md:flex-row gap-3 md:gap-[5vw] font-caveat text-3xl'>
							<SplashScreenListItem>All natural</SplashScreenListItem>
							<SplashScreenListItem>Gluten free</SplashScreenListItem>
							<SplashScreenListItem>No refined sugar</SplashScreenListItem>
							<SplashScreenListItem>Soy free</SplashScreenListItem>
						</div>
					</div>
				</div>
				<div className='bg-red grid justify-items-center'>
					<BodyClamp className='bg-red'>
						<div className='grid md:grid-cols-[max-content_auto] grid-rows-[repeat(4,auto)] gap-3 justify-center px-1 pt-1'>
							<img src='chef.png' className='hidden md:block row-span-full place-self-end'/>
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
				</div>
			</div>
		</section>
	);
};

export default SplashScreen;
