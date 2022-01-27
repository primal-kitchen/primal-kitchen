import { NextPage } from 'next';
import Product, { Day } from '../components/product/product';
import BodyClamp from '../components/utilities/body-clamp';

const Testing: NextPage = ({}) => (
	<BodyClamp>
		{/* needs to be auto fit because centers if less items than 1 full row, but place remaining on left on final row*/}
		<section className='grid justify-center gap-6 w-full mt-6' style={{ gridTemplateColumns: 'repeat(auto-fit, 300px)' }}>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/chef.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
			<Product daysProductIsFor={[Day.MONDAY]} imageUrl='images/cover.png' title='Spinach Djion Chicken'/>
		</section>
	</BodyClamp>
);

export default Testing;
