import { useDebugValue, useEffect, useState } from 'react';
import { Map, OrderedMap } from 'immutable';

// TODO: refactor this entire hook; it's overly complex
export default function useFirstItemInView<Type, TypeIdentifier>(items: Type[],
																 getElement: (item: Type) => Element | null,
																 getIdentifier: (item: Type) => TypeIdentifier,
																 options: IntersectionObserverInit): Type | undefined {
	const createItemVisibilityMap = (): OrderedMap<TypeIdentifier, boolean> => {
		// can't extract mapping out to variable to clean this code up. very weird js behaviour... think some weird inference is going on?
		// 	same with the similar function below...
		return OrderedMap<TypeIdentifier, boolean>(items.map(item => ([getIdentifier(item), false])));
	};

	const createItemIdentifierMap = (): Map<TypeIdentifier, Type> => {
		return Map<TypeIdentifier, Type>(items.map(item => ([getIdentifier(item), item])));
	};

	// just for performance/convenience
	const [itemIdentifierMap] = useState<Map<TypeIdentifier, Type>>(createItemIdentifierMap());
	// tracks which items are currently visible
	const [itemVisibilityMap, setItemVisibilityMap] = useState<OrderedMap<TypeIdentifier, boolean>>(createItemVisibilityMap());
	const [firstItemInView, setFirstItemInView] = useState<Type | undefined>();

	// change the first item in view as the visibility of items changes
	useEffect(() => {
		const firstVisible: Type | undefined = itemVisibilityMap
			.filter((itemIsVisible: boolean) => itemIsVisible)
			.take(1) // as the list is ordered the first will be the first element on the page (TODO: clean up this wording)
			.map((_, itemIdentifier: TypeIdentifier) => itemIdentifier)
			.map(itemIdentifier => itemIdentifierMap.get(itemIdentifier))
			.toList()
			.get(0);
		// can't set the first item in view to nothing
		if (firstVisible !== undefined) setFirstItemInView(firstVisible);
	}, [itemVisibilityMap, itemIdentifierMap]);

	// probably want to use a map here for improved lookup performance. could do something smart here like lazily building map as go (memoize?)
	const getItemUsingElement = (element: Element): Type | undefined => {
		return items.find(item => {
			if (!item) return false;
			return getElement(item) === element;
		});
	};

	// could look into simplifying with a hook. maybe from react-use?
	// essentially, update the itemVisibilityMap as the items change their visibility status...
	useEffect(() => {
		const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer) => {
			entries.forEach(entry => {
				const item = getItemUsingElement(entry.target);
				if (item !== undefined) {
					setItemVisibilityMap(itemVisibilityMap => itemVisibilityMap.set(getIdentifier(item), entry.isIntersecting));
				}
			});
		};

		const intersectionObserver = new IntersectionObserver(callback, options);

		items.forEach(item => {
			const elementForItem = getElement(item);
			if (elementForItem === null) return;
			intersectionObserver.observe(elementForItem);
		});

		return () => intersectionObserver.disconnect();
	}, [setItemVisibilityMap, getItemUsingElement, getIdentifier, getElement, items, options]);

	useDebugValue<Type | undefined>(firstItemInView);

	return firstItemInView;
};
