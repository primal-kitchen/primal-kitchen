import { useEffect, useState } from 'react';
import useNavHeight from '../nav/use-nav-height';
import useElementHeight from './use-element-height';
import { PRODUCT_SECTION_MENU_ID } from '../product-section/product-sections-menu';

export default function useFirstItemInView<Type>(items: Type[], getElement: (item: Type) => Element | null, options: IntersectionObserverInit) {
	const [firstItemInView, setFirstItemInView] = useState<Type>();
	const navHeight = useNavHeight();

	useEffect(() => {

		// WE WANT: first element with intersection ratio above .9
		const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
			const entriesInView = entries.filter(entry => entry.isIntersecting);
			if (entriesInView.length === 0) return;
			const newItem = items.filter(item => {
				const elem = getElement(item);
				if (elem === null) return false;
				return entries.map(entry => entry.target).includes(elem);
			})[0]
			setFirstItemInView(currentValue => newItem ?? currentValue);
		};

		const intersectionObserver = new IntersectionObserver(callback, options);

		items.forEach(item => {
			const elementForItem = getElement(item);
			if (elementForItem === null) return;
			intersectionObserver.observe(elementForItem);
		});

		return () => intersectionObserver.disconnect();
	}, []);

	return firstItemInView;
};
