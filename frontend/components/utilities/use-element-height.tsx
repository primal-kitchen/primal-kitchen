import { useEffect, useState } from 'react';

export default function useElementHeight(id: string): number {
	const [navHeight, setNavHeight] = useState(0);

	useEffect(() => {
		const updatedNavHeight = document?.getElementById(id)?.clientHeight;
		if (updatedNavHeight !== undefined) setNavHeight(updatedNavHeight);
	}, []);

	return navHeight;
}
