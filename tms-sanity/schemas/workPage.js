export default {
	name: 'workContent',
	title: '"Our Work" Page Contents',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'project' } }],
		},
	],
};
