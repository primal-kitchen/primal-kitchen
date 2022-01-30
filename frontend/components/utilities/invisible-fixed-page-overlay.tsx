import React from 'react';

type InvisibleFixedPageOverlayProps = {
	children: any,
	isVisible: boolean,
	onOutsideContentClicked: any,
}

const InvisibleFixedPageOverlay: React.FC<InvisibleFixedPageOverlayProps> = ({isVisible, onOutsideContentClicked, children}) => (
	// TODO: z value should be calculated off of the nav z value
	<div className={`fixed inset-0 grid place-items-center bg-black/75 z-20 ${isVisible ? '' : 'hidden'}`}
		 onClick={event => {
			 event.stopPropagation();
			 onOutsideContentClicked();
		 }}>
		{/* exists purely to prevent content clicked. probably a more official way to do this 🙂 */}
		<div className='contents' onClick={event => event.stopPropagation()}>
			{children}
		</div>
	</div>
);

export default InvisibleFixedPageOverlay;
