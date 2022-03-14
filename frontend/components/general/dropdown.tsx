import React from 'react';

type DropdownProps = {
	options: string[],
}

const Dropdown: React.FC<DropdownProps> = ({options}) => {
	return (
		<select className='bg-white border px-2'>
			{options.map(option =>
				<option value={option} key={option}>{option}</option>,
			)}
		</select>
	);
};

export default Dropdown;
