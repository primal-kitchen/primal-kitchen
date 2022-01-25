import BodyClamp from '../utilities/body-clamp';

const SplashScreen = () => {
	return (
		<section className=''>
			<div className='hidden'>
				{/*<img src='cover.png' className=''/>*/}
				<div className='relative top-0 text-white bg-cover flex flex-col items-center' style={{backgroundImage: 'url(cover.png)'}}>
					<h1 className='font-libre-franklin'>Paleo Meals</h1>
					<h2 className='font-libre-franklin'>...delivered fresh</h2>
					<ul className='flex flex-row gap-8 font-caveat' style={{listStyleImage: 'url(tick.svg)'}}>
						<li>All natural</li>
						<li>Gluten free</li>
						<li>No refined sugar</li>
						<li>Soy free</li>
					</ul>
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
								For the <b>rest of the country</b>: Monday - Wednesday meals are delivered on <b>Tuesday</b>, and remaining
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
		</section>
	);
};

export default SplashScreen;
