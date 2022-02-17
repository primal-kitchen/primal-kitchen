import { RefObject, useEffect, useState } from 'react';

const useIsVisible = (
	ref: RefObject<HTMLDivElement>,
	rootRef?: RefObject<HTMLElement>,
): boolean => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		if (!ref.current) return;

		const intersectionObserver = new IntersectionObserver(([entries]) => setIsVisible(entries.isIntersecting), {
			// root: rootRef, // to check thingo is visble within
			threshold: 0.20, // fire when it's 20% visible
		});
		intersectionObserver.observe(ref.current);

		return () => intersectionObserver.disconnect();
	}, []);

	return isVisible;
};

export default useIsVisible;
