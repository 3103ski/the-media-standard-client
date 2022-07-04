// --> React
import React from 'react';

export default function VimeoHeader() {
	const [width, setWidth] = React.useState(0);
	const [height, setHeight] = React.useState(0);

	const calculateHeight = () => {
		let width = window.innerWidth;
		let height = width * 0.5625;
		setWidth(width);
		setHeight(height);
	};

	React.useEffect(() => {
		calculateHeight();
	}, []);

	React.useEffect(() => {
		window.addEventListener('resize', calculateHeight);
		return () => window.removeEventListener('resize', calculateHeight);
	});

	return (
		<div style={{ marginBottom: '-10px' }}>
			<iframe
				src='https://player.vimeo.com/video/393510658?h=215419beb5?autoplay=1&loop=1&autopause=0&background=1&color=ffffff&controls=2&portrait=0'
				width={width}
				height={height}
				title='landing video'
				frameborder='0'
				allow='autoplay; fullscreen; picture-in-picture'
				allowfullscreen></iframe>
		</div>
	);
}
