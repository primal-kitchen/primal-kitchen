import React from 'react';
import Icon, { Colour, IconName } from '../general/icon';

type Props = { children: any }

const SplashScreenCoverImageListItem: React.FC<Props> = props => (
	<div className='flex gap-3'>
		<Icon iconName={IconName.TICK} colour={Colour.WHITE} widthInPixels={30} heightInPixels={30}/>
		<p className=''>{props.children}</p>
	</div>
);

export default SplashScreenCoverImageListItem;
