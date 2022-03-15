import React, { useState } from 'react';
import InvisibleFixedPageOverlay from '../utilities/invisible-fixed-page-overlay';
import Button, { Colour, Proportion, Size } from '../general/button';
import { useStateList, useToggle } from 'react-use';

// TODO: fix dodgy visibility shit
// TODO: where should this component even live
const AddressPopup: React.FC<{}> = () => {
	const [buttonEnabled, toggleButtonEnabled] = useToggle(false);
	const [notes, setNotes] = useState<any[]>([]);
	const setDummyNotes = () => {
		if (buttonEnabled) setNotes([]);
		else setNotes([
			<>Monday - Wednesday meals are delivered on a <b>Tuesday</b> instead of a Monday.</>,
			<>The courier fee is <b>$30</b></>,
		]);
		toggleButtonEnabled();
	};

	return (
		<article className='flex flex-col gap-2 bg-white text-black p-4'>
			<h1 className='font-bold text-2xl' onClick={setDummyNotes}>Delivery address</h1>
			<h2 className='font-bold -mb-2'>Enter your delivery address to find a store</h2>
			<input type='text' className='border w-[60ch] p-2'/>
			{
				notes.length > 0 &&
				<>
					<div>Please note for your location:</div>
					<ul className='list-disc pl-6'>
						{notes.map(note => <li>{note}</li>)}
					</ul>
				</>
			}
			<Button width={Proportion.FULL} colour={Colour.RED} padding={Size.MEDIUM} enabled={buttonEnabled}
					onClick={toggleButtonEnabled} className='mt-1'>Select store</Button>
		</article>
	);
};

export default AddressPopup;
