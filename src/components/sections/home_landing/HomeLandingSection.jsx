// --> React
import React from 'react';
// import { Link } from 'react-router-dom';

// --> Packages
import { Container, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Overlay, VimeoHeader } from 'components';
import { videoPlaceholder } from 'assets';
import { checkSeshStorageAddIfNeeded } from 'util';
import { fetchGeneralInfo } from 'groq';

// --> Component Imports
import Style from './homeLandingSection.module.scss';

export default function HomeLandingSection() {
	const [video, setVideo] = React.useState(null);

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
	return !video ? (
		<div className={Style.HeaderVideoContainer} id={'section-1'}>
			<div className={Style.HeaderVideoOverlay}>
				<Header vid={true} />
			</div>
			<VimeoHeader />
		</div>
	) : (
		<Header vid={video} />
	);
}
