import SplashScreenCoverImageListItem from './splash-screen-cover-image-list-item';
import BodyClamp from '../utilities/body-clamp';

const SplashScreenCoverImage = () => (
	<BodyClamp className="h-full bg-cover bg-center bg-[url('/images/cover.png')]">
		<div className='w-max flex flex-col justify-center items-center mt-8 text-white'>
			<h1 className='font-libre-franklin font-bold text-5xl self-start'>Paleo Meals</h1>
			<h2 className='font-libre-franklin font-bold text-3xl mt-5 mb-[25%] self-start'>... delivered fresh</h2>
			<div className='flex flex-col md:flex-row gap-3 md:gap-[5vw] font-caveat text-3xl'>
				<SplashScreenCoverImageListItem>All natural</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>Gluten free</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>No refined sugar</SplashScreenCoverImageListItem>
				<SplashScreenCoverImageListItem>Soy free</SplashScreenCoverImageListItem>
			</div>
		</div>
	</BodyClamp>
);

export default SplashScreenCoverImage;
