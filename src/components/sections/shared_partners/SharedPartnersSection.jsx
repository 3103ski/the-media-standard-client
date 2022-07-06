// --> React
import React from 'react';

// --> Packages
import { Image, Grid } from 'semantic-ui-react';

// --> Project Imports
import { Section, Loading } from 'components';
import { fetchClients } from 'groq';
import { checkSeshStorageAddIfNeeded } from 'util';

// --> Component Imports
import Style from './sharedPartnersSection.module.scss';

export default function SharedPartnersSection() {
	const [clients, setClients] = React.useState(null);

	// Fetch team member data
	React.useEffect(() => {
		checkSeshStorageAddIfNeeded(`tms_clients`, setClients, fetchClients, null, 'clients');
	}, []);
	return !clients ? (
		<Loading size='small' />
	) : (
		<div className={Style.Wrapper}>
			<Section>
				<Grid textAlign='center'>
					<Grid.Row>
						{clients.map((client, i) =>
							i > 11 ? null : (
								<Grid.Column
									key={`${Math.random()}_${i}`}
									computer={4}
									tablet={8}
									mobile={5}
									className={Style.ImageColumn}>
									<Image src={client.logo.asset.url} />
								</Grid.Column>
							)
						)}
					</Grid.Row>
				</Grid>
			</Section>
		</div>
	);
}
