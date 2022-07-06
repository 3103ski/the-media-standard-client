export default {
	name: 'teamSection',
	title: '"Team Section" Content',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'teamMembers',
			title: 'Team Members',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'teamMember' } }],
		},
	],
};
