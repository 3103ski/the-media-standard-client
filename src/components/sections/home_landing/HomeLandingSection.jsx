// --> React
import React from 'react';
// import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid, Embed } from 'semantic-ui-react';

// --> Project Imports
import { Overlay } from 'components';
import { videoPlaceholder } from 'assets';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchGeneralInfo } from 'groq';

// --> Component Imports
import Style from './homeLandingSection.module.scss';

export default function HomeLandingSection() {
	const [video, setVideo] = React.useState(null);

	console.log(video);

	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(
			`tms_landingvideo`,
			(vid) => (vid ? setVideo(vid.split('=')[1]) : setVideo(null)),
			fetchGeneralInfo,
			null,
			'landingVideo'
		);
	}, []);

	const Header = ({ vid = null }) => {
		return (
			<header
				className={Style.SectionWrapper}
				data-video={vid ? 1 : 0}
				style={{ backgroundImage: vid ? '' : `url(${videoPlaceholder})` }}>
				<Container>
					<Grid className={Style.Wrapper}>
						<Grid.Row>
							<Grid.Column textAlign='center' mobile={16}>
								<h1 className={Style.Title}>
									<span>THE</span>
									<span>MEDIA</span>
									<span>STANDARD</span>
								</h1>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Overlay type='brand' />
			</header>
		);
	};

	return video ? (
		<div className={Style.HeaderVideoContainer} id={'section-1'}>
			<div className={Style.HeaderVideoOverlay}>
				<Header vid={video} />
			</div>
			<Embed
				autoplay={true}
				id={video}
				active
				source='youtube'
				iframe={{
					allowFullScreen: true,
					src: `https://www.youtube.com/embed/${video}?autoplay=1&;mute=1&;playlist=${video}&;loop=1&;controls=0&;rel=0`,
					allow: 'autoplay',
				}}
			/>
		</div>
	) : (
		<Header vid={video} />
	);
}
