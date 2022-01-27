import { NextPage } from 'next';
import Product, { Day, Options } from '../components/product/product';
import BodyClamp from '../components/utilities/body-clamp';

const Testing: NextPage = ({}) => (
	<BodyClamp>
		{/* needs to be auto fit because centers if less items than 1 full row, but place remaining on left on final row*/}
		<section ></section>
	</BodyClamp>
);

export default Testing;
