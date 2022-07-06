export default {
	name: 'client',
	title: 'Clients',
	type: 'document',
	fields: [
		{
			name: 'company',
			title: 'Client Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Description (optional)',
			type: 'string',
		},
		{
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
	],
};
