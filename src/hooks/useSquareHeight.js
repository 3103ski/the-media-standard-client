// --> React
import React from 'react';

export default function useSquareHeight(ref) {
	const [height, setHeight] = React.useState(null);

	const calcHeight = React.useCallback(() => {
		if (ref.current) {
			let el = ref.current.getBoundingClientRect();
			setHeight(`${el.width}px`);
		}
	}, [ref]);

	React.useEffect(() => {
		if (ref.current && !height) {
			calcHeight();
		}
	}, [calcHeight, ref, height]);

	React.useEffect(() => {
		window.addEventListener('resize', calcHeight);
		return () => window.removeEventListener('resize', calcHeight);
	}, [calcHeight]);

	return {
		height,
	};
}
