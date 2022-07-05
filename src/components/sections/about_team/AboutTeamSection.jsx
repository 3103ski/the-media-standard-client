// --> React
import React from 'react';

// --> Packages
// import { Grid } from 'semantic-ui-react';

// --> Project Imports
import { TeamMemberCard, Section } from 'components';
import { team1, team2, team3, team4 } from 'assets';

// --> Component Import
// import Style from './aboutTeamSection.module.scss';

export default function AboutTeamSection() {
	const team = [
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team1,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers Townsend',
			subtitle: 'Video Director',
			img: team2,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team3,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
		{
			title: 'Josh Smithers',
			subtitle: 'Video Director',
			img: team4,
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eligendi. Quos inventore iusto, ut earum doloribus, voluptas iure hic architecto obcaecati, deleniti velit accusamus aperiam sapiente temporibus reprehenderit dolorum expedita.',
		},
	];
	return (
		<Section fluid>
			<TeamMemberCard.Wrapper>
				{team.map((t) => (
					<TeamMemberCard key={`${t.title}_${Math.random()}`} item={t} />
				))}
			</TeamMemberCard.Wrapper>
		</Section>
	);
}
