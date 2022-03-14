import React from 'react';
import Icon, { Colour, IconName } from '../icon/icon';

type Props = { children: any }

const SplashScreenCoverImageListItem: React.FC<Props> = props => (
	<div className='flex gap-3'>
		<Icon iconName={IconName.TICK} colour={Colour.WHITE} sizeInPixels={10}/>
		<p className=''>{props.children}</p>
	</div>
);

export default SplashScreenCoverImageListItem;
