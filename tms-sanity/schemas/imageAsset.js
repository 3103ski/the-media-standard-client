export default {
	name: 'imageAsset',
	title: 'Images',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'fullImage',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
