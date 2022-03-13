import React, { ForwardedRef, useImperativeHandle, useState } from 'react';
import { useCounter } from 'react-use';

type CounterProps = {
	startingCount?: number,
}

type CounterHandle = {
	getCount: () => number,
}

type CounterRef = HTMLDivElement;

const Counter = ({startingCount = 1}: CounterProps, ref: ForwardedRef<CounterHandle>) => {
	const [count, {inc: increment, dec: decrement}] = useCounter(startingCount, null, 1);

	useImperativeHandle(ref, () => ({
		getCount: () => count,
	}), [count]);

	return (
		<div className='flex flex-row items-center justify-center gap-2 pt-4'>
			{/* TODO: copy theme rounding*/}
			{/* TODO: import actual negative icon */}
			<div onClick={event => decrement()}>-</div>
			{/* TODO: this will blow up with bigger nums */}
			<div className='text-center p-2 border w-[40px] h-[40px]'>{count}</div>
			{/* TODO: import actual postive icon */}
			<div onClick={event => increment()}>+</div>
		</div>
	);
};

const createCounterRef = (): React.RefObject<CounterHandle> => React.createRef<CounterHandle>();

export type {
	CounterRef,
	CounterHandle,
};

export {
	createCounterRef,
}

export default React.forwardRef<CounterHandle, CounterProps>(Counter);
