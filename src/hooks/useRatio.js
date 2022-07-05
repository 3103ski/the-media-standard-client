// --> React
import React from 'react';

export default function useRatio(ratio) {
	const [width, setWidth] = React.useState(0);
	const [height, setHeight] = React.useState(0);

	const calculateHeight = React.useCallback(() => {
		let multiplier = 0;

		switch (ratio) {
			case '16:9':
			default:
				multiplier = 0.5625;
				break;
		}

		let width = window.innerWidth;
		let height = width * multiplier;
		setWidth(width);
		setHeight(height);
	}, [ratio]);

	React.useEffect(() => {
		calculateHeight();
	}, [calculateHeight]);

	React.useEffect(() => {
		window.addEventListener('resize', calculateHeight);
		return () => window.removeEventListener('resize', calculateHeight);
	});

	return {
		width,
		height,
	};
}
