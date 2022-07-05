export default {
	name: 'general',
	title: 'Admin - General Information',
	type: 'document',
	fields: [
		{
			name: 'generalInfo',
			title: 'General Information',
			type: 'string',
		},

		{
			name: 'landingVideo',
			title: 'Home Landing Video (Vimeo URL)',
			type: 'url',
		},
		{
			name: 'facebook',
			title: 'Facebook URL',
			type: 'url',
		},
		{
			name: 'instagram',
			title: 'Instagram URL',
			type: 'url',
		},
		{
			name: 'yelp',
			title: 'Yelp URL',
			type: 'url',
		},
	],
};
