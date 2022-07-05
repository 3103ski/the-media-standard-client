// --> React
import React from 'react';

// --> Project Imports
import { useRatio } from 'hooks';

export default function VimeoHeader({ video }) {
	const { height, width } = useRatio('16:9');

	return (
		<div style={{ marginBottom: '-10px' }}>
			<iframe
				src={`${video}?autoplay=1&loop=1&autopause=0&background=1&color=ffffff&controls=2&portrait=0`}
				width={width}
				height={height}
				title='landing video'
				frameBorder='0'
				allow='autoplay; fullscreen; picture-in-picture'
				allowFullScreen></iframe>
		</div>
	);
}
