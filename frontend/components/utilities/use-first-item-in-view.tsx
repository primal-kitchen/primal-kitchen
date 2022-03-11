import { useCallback, useDebugValue, useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-use';

// TODO: refactor this entire function it's overly complex
export default function useFirstItemInView<Type, TypeIdentifier>(items: Type[],
																 getElement: (item: Type) => Element | null,
																 getIdentifier: (item: Type) => TypeIdentifier,
																 options: IntersectionObserverInit): Type | undefined {
	// does this maybe need to be a useCallback? summn summn closures summn summn
	const createItemVisibilityMap = (): Map<TypeIdentifier, boolean> => {
		const map = new Map<TypeIdentifier, boolean>();
		items.forEach(item => map.set(getIdentifier(item), false));
		return map;
	};

	const createItemIdentifierMap = (): Map<TypeIdentifier, Type> => {
		const map = new Map<TypeIdentifier, Type>();
		items.forEach(item => map.set(getIdentifier(item), item));
		return map;
	};

	const [itemIdentifierMap] = useState<Map<TypeIdentifier, Type>>(createItemIdentifierMap());
	// const [itemVisibilityMap, setItemVisibilityMap] = useState<Map<TypeIdentifier, boolean>>(createItemVisibilityMap());
	const [itemVisibilityMap, {set: }] = useMap<Map<TypeIdentifier, boolean>>(createItemVisibilityMap());
	// TODO: this is shitty...
	const [shouldRecalculateFirstItemInView, setShouldRecalculateFirstItemInView] = useState<boolean>(false);

	// are we sure this preserves order of items??
	const firstItemInView = useMemo<Type | undefined>(() => {
		console.log('first item in biew updating');
		for (const [itemIdentifier, itemIsVisible] of itemVisibilityMap)
			if (itemIsVisible) {
				console.log('setting to: ');
				console.log(itemIdentifier);
				return itemIdentifierMap.get(itemIdentifier);
			}
	}, [itemVisibilityMap, shouldRecalculateFirstItemInView]);

	useDebugValue<Type | undefined>(firstItemInView);

	// probably want to use a map here for improved lookup performance
	const getItemUsingElement = (element: Element): Type | undefined => {
		return items.find(item => {
			if (!item) return false;
			return getElement(item) === element;
		});
	};

	useEffect(() => {
		// WE WANT: first element with intersection ratio above .9
		const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer) => {
			entries.forEach(entry => {
				setItemVisibilityMap(itemsToVisibility => {
					// mutability bad? should create new map?
					const item = getItemUsingElement(entry.target);
					if (item !== undefined) {
						console.log(item);
						console.log(`setting to ${entry.isIntersecting}`);
						itemsToVisibility.set(getIdentifier(item), entry.isIntersecting);
					}
					return itemsToVisibility;
				});
			});
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
