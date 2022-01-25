import React from 'react';

type Props = { children: any }

const SplashScreenCoverImageListItem: React.FC<Props> = props => (
	<div className='flex gap-3'>
		<img src='tick.svg'/>
		<p className=''>{props.children}</p>
	</div>
);

export default SplashScreenCoverImageListItem;
