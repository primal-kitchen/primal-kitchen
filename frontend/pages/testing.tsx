import { NextPage } from 'next';
import Icon, { Colour, IconName } from '../components/icon/icon';

const Testing: NextPage = ({}) => (
	<div className='bg-red'>
		<Icon iconName={IconName.TICK} colour={Colour.WHITE}/>
		<Icon iconName={IconName.TICK} colour={Colour.BLACK}/>
		<Icon iconName={IconName.SHOPPING_CART} colour={Colour.WHITE}/>
	</div>
);

export default Testing;
