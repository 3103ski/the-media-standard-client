export default {
	name: 'project',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'client',
			title: 'Project Client',
			type: 'reference',
			to: { type: 'client' },
		},
		{
			name: 'summary',
			title: 'Description Summary',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Full Description',
			type: 'blockContent',
		},
		{
			name: 'projectLink',
			title: 'Client Link',
			type: 'url',
		},
		{
			name: 'year',
			title: 'Year Text',
			type: 'string',
		},

		{
			name: 'category',
			title: 'Category',
			type: 'string',
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'imageAsset' } }],
		},
		{
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
		},
		{
			name: 'finishDate',
			title: 'Finish Date',
			type: 'date',
		},
	],
};
