export default {
	name: 'clientSection',
	title: '"Client Section" Content',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'clients',
			title: 'Clients',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'client' } }],
		},
	],
};
