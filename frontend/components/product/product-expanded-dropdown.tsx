import React, { useCallback, useState } from 'react';

type Props = {
	title: string,
	children: any,
}

const ProductExpandedDropdown: React.FC<Props> = ({title, children}) => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const toggleIsCollapsed = useCallback(() => setIsCollapsed(oldValue => !oldValue), [setIsCollapsed]);

	return (
		<div>
			<div className='flex flex-row gap-1' onClick={toggleIsCollapsed}>
				<div className='text-red font-bold'>{title}</div>
				{/* TODO: import actual chevron icon */}
				<div className='text-red' onClick={toggleIsCollapsed}>
					{isCollapsed ? '>' : '<'}
				</div>
			</div>
			<div className={isCollapsed ? 'hidden' : ''}>
				{children}
			</div>
		</div>
	);
};

export default ProductExpandedDropdown;
