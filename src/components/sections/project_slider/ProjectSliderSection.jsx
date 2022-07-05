// --> React
import React from 'react';

// --> Packages
import { Image } from 'semantic-ui-react';

// --> Project Imports
import { Section } from 'components';

// --> Component Imports
import Style from './projectSliderSection.module.scss';

export default function ProjectSliderSection({ project }) {
	const [photos, setPhotos] = React.useState([]);
	const [activeIndex, setActiveIndex] = React.useState(0);

	let [thumbSize, thumbMargin] = [100, 10];

	const Thumbnail = ({ pic, index }) => {
		return (
			<div
				className={Style.Thumbnail}
				onClick={() => setActiveIndex(index)}
				style={{
					marginRight: `${thumbMargin}px`,
					backgroundImage: `url(${pic})`,
					height: `${thumbSize}px`,
					width: `${thumbSize}px`,
				}}></div>
		);
	};

	React.useEffect(() => {
		if (photos.length === 0 && project.images.length > 0) {
			setPhotos(project.images);
		}
	}, [photos, project]);

	return photos.length < 1 ? null : (
		<Section>
			<div className={Style.SliderWrapper}>
				<div className={Style.ActiveImage}>
					{photos.map((p, i) => (
						<div className={Style.ActiveWrapper} data-is-active={i === activeIndex ? 1 : 0}>
							<Image alt='Active Slider Image' src={photos[activeIndex].fullImage.asset.url} />
						</div>
					))}
				</div>
				<div className={Style.Thumbnails}>
					<div className={Style.Inner} style={{ width: `${photos.length * (thumbSize + thumbMargin)}px` }}>
						{photos.map((p, i) => (
							<Thumbnail pic={p.thumbnail.asset.url} index={i} />
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
