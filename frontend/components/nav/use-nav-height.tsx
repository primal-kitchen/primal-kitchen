import { useEffect, useState } from 'react';

export default function useNavHeight(): number {
	const [navHeight, setNavHeight] = useState(0);

	useEffect(() => {
		const updatedNavHeight = document?.getElementById('nav')?.clientHeight;
		if (updatedNavHeight !== undefined) setNavHeight(updatedNavHeight);
	}, []);

	return navHeight;
}
