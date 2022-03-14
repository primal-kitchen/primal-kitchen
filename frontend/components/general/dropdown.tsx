import React from 'react';

type DropdownProps = {
	options: string[],
	className?: string,
}

const Dropdown: React.FC<DropdownProps> = ({options, className}) => {
	return (
		<select className={`h-fit w-fit bg-white border p-1.5 pr-4 ${className}`}>
			{options.map(option =>
				<option value={option} key={option}>{option}</option>,
			)}
		</select>
	);
};

export default Dropdown;
