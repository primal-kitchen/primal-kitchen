import SplashScreenCoverImageListItem from './splash-screen-cover-image-list-item';

const SplashScreenCoverImage = () => (
	<div className='h-full text-white bg-cover flex flex-col items-center' style={{backgroundImage: 'url(cover.png)'}}>
		<div className='w-max h-full flex flex-col justify-center items-center mt-8'>
			<h1 className='font-libre-franklin font-bold text-5xl self-start'>Paleo Meals</h1>
			<h2 className='font-libre-franklin font-bold text-3xl mt-5 mb-[25%] self-start'>... delivered fresh</h2>
			<div className='flex flex-col md:flex-row gap-3 md:gap-[5vw] font-caveat text-3xl'>
				<SplashScreenCoverImageListItem>All natural</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>Gluten free</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>No refined sugar</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>Soy free</SplashScreenCoverImageListItem>
			</div>
		</div>
	</div>
);

export default SplashScreenCoverImage;
