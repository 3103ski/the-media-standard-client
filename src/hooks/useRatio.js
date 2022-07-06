// --> React
import React from 'react';
// import SASS from '../sass/index.scss';
// import { intFromPx } from 'util';

export default function useRatio(ratio) {
	const [width, setWidth] = React.useState(0);
	const [height, setHeight] = React.useState(0);

	const calculateHeight = React.useCallback(() => {
		let multiplier = 0;
		// let screen = window.innerWidth;

		switch (ratio) {
			case '16:9':
			default:
				multiplier = 0.5625;
				break;
		}

		let width;
		let height;
		// if (screen < intFromPx(SASS.bp_mobile_lg)) {
		// 	width = window.innerWidth;
		// 	height = width * 1.7777777;
		// } else {
		// }
		width = window.innerWidth;
		height = width * multiplier;

		setWidth(width);
		setHeight(height);
	}, [ratio]);

	React.useEffect(() => {
		calculateHeight();
	}, [calculateHeight]);

	React.useEffect(() => {
		window.addEventListener('resize', calculateHeight);
		document.addEventListener('resize', calculateHeight);
		return () => {
			document.addEventListener('resize', calculateHeight);
			window.removeEventListener('resize', calculateHeight);
		};
	});

	return {
		width,
		height,
	};
}
