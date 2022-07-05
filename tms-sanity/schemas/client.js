export default {
	name: 'client',
	title: 'Clients',
	type: 'document',
	fields: [
		{
			name: 'company',
			title: 'Client Name',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
